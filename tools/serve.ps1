# 홍대 느슨지도 — 내 컴퓨터 전용 간이 웹서버 (Windows 기본 PowerShell 만 사용, 설치 필요 없음)
# "지도 실행하기(Windows).bat" 이 이 파일을 실행합니다. 창을 닫으면 서버도 꺼져요.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$port = 8787
$listener = New-Object System.Net.HttpListener
while ($true) {
  try { $listener = New-Object System.Net.HttpListener; $listener.Prefixes.Add("http://localhost:$port/"); $listener.Start(); break }
  catch { $port++; if ($port -gt 8799) { Write-Host '빈 포트를 찾지 못했어요.'; Read-Host '엔터를 누르면 닫혀요'; exit 1 } }
}
$url = "http://localhost:$port/index.html"
Write-Host ''
Write-Host "  홍대 느슨지도를 열었어요: $url"
Write-Host '  이 검은 창을 닫으면 지도도 더 이상 열리지 않아요.'
Write-Host ''
Start-Process $url
$types = @{ '.html'='text/html; charset=utf-8'; '.js'='text/javascript; charset=utf-8'; '.css'='text/css; charset=utf-8';
  '.png'='image/png'; '.jpg'='image/jpeg'; '.svg'='image/svg+xml'; '.json'='application/json; charset=utf-8'; '.md'='text/plain; charset=utf-8' }
$rootFull = [System.IO.Path]::GetFullPath($root)
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  try {
    $rel = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
    if ($rel -eq '') { $rel = 'index.html' }
    $path = [System.IO.Path]::GetFullPath((Join-Path $rootFull $rel))
    if ($path.StartsWith($rootFull) -and (Test-Path $path -PathType Leaf)) {
      $bytes = [System.IO.File]::ReadAllBytes($path)
      $ext = [System.IO.Path]::GetExtension($path).ToLower()
      $ctx.Response.ContentType = $(if ($types[$ext]) { $types[$ext] } else { 'application/octet-stream' })
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else { $ctx.Response.StatusCode = 404 }
  } catch { $ctx.Response.StatusCode = 500 }
  $ctx.Response.Close()
}

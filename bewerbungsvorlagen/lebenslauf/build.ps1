# Erzeugt aus den Lebenslauf-Vorlagen die PDFs.
#
#   source.html          -> public/bewerbungsunterlagen/lebenslauf.pdf
#                           OEFFENTLICHE Fassung ohne Kontaktdaten der
#                           Referenzpersonen (steht auf der Website zum Download).
#
#   source-versand.html  -> bewerbungsvorlagen/lebenslauf/lebenslauf-versand.pdf
#                           VOLLE Fassung mit Referenzkontakten, nur fuer den
#                           direkten Versand. Beide Dateien sind gitignoriert
#                           und duerfen nicht veroeffentlicht werden.
#
# Nach jeder Aenderung an einer source-Datei ausfuehren.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

function Build-Pdf($quelle, $ziel) {
    $tmp = Join-Path $PSScriptRoot "output.pdf"
    # Pfad und Adresse muessen in Anfuehrungszeichen stehen: Der Repository-Pfad
    # enthaelt mit "Meine Apps" ein Leerzeichen. Ohne Quoting zerlegt Edge das
    # Argument und bricht mit "Multiple targets are not supported in headless
    # mode" ab.
    $uri = "file:///$($quelle -replace '\\','/')"
    Start-Process -FilePath $edge -ArgumentList @(
        "--headless",
        "--disable-gpu",
        "--no-pdf-header-footer",
        "--print-to-pdf=`"$tmp`"",
        "`"$uri`""
    ) -Wait -NoNewWindow

    if (-not (Test-Path $tmp)) { throw "PDF wurde nicht erzeugt: $tmp" }
    Move-Item -Force $tmp $ziel
    Write-Output "erzeugt: $ziel"
}

# Oeffentliche Fassung
Build-Pdf (Join-Path $PSScriptRoot "source.html") `
          (Join-Path $root "public\bewerbungsunterlagen\lebenslauf.pdf")

# Versandfassung, falls lokal vorhanden
$versandQuelle = Join-Path $PSScriptRoot "source-versand.html"
if (Test-Path $versandQuelle) {
    Build-Pdf $versandQuelle (Join-Path $PSScriptRoot "lebenslauf-versand.pdf")
} else {
    Write-Output "Hinweis: source-versand.html fehlt - nur die oeffentliche Fassung erzeugt."
}

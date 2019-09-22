define({
  "_widgetLabel": "地理検索",
  "description": "視覚化する<a href='/widgets/GeoLookup/data/sample.csv' tooltip='Download an example sheet' target='_blank'>スプレッドシート</a>を参照またはここにドラッグして、マップ データを追加します。",
  "selectCSV": "CSV の選択",
  "loadingCSV": "CSV を読み込んでいます",
  "savingCSV": "CSVExport",
  "clearResults": "消去",
  "downloadResults": "ダウンロード",
  "plotOnly": "ポイントのみをプロット",
  "plottingRows": "行をプロットしています",
  "projectionChoice": "CSV 入力",
  "projectionLat": "緯度/経度",
  "projectionMap": "地図投影",
  "messages": "メッセージ",
  "error": {
    "fetchingCSV": "CSV ストアからのアイテムの取得中にエラーが発生しました: ${0}",
    "fileIssue": "ファイルを処理できませんでした。",
    "notCSVFile": "現在、カンマ区切りファイル (*.csv) のみがサポートされています。",
    "invalidCoord": "位置フィールドが無効です。 CSV ファイルを確認してください。",
    "tooManyRecords": "現在、${0} より多いレコード数は許可されません。",
    "CSVNoRecords": "ファイルにレコードが含まれていません。",
    "CSVEmptyFile": "ファイル内にコンテンツがありません。"
  },
  "results": {
    "csvLoaded": "CSV ファイルから ${0} レコードが読み込まれました",
    "recordsPlotted": "${0}/${1} レコードがマップに配置されました",
    "recordsEnriched": "${0}/${1} が処理され、${2} は ${3} に対して情報が付加されました",
    "recordsError": "${0} レコードにエラーがありました",
    "recordsErrorList": "行 ${0} に問題があります",
    "label": "CSV の結果"
  }
});
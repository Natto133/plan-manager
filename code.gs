const DISCORD_API_URL = "";
const DISCORD_USER_ID = "";
let SS = SpreadsheetApp.getActiveSpreadsheet();

function sendDiscord(title, description) {
  let date = new Date()

  let payload = {
    "username": "秘書部計画管理課",
    "content": "<@"+DISCORD_USER_ID+">",
    "embeds": [
      {
        "title": title,
        "description": description,
        "url": "",
        "timestamp": date.toJSON(),
        "color": 1166295,
        "author": {
          "name": "@秘書部計画管理課SpreadSheet"
        }
      }
    ]
  };

  let options = {
    'method' : 'post',
    'contentType': 'application/json',
    'payload': JSON.stringify(payload)  
  };

  let responseDataPOST = UrlFetchApp.fetch(DISCORD_API_URL,options).getContentText();
}


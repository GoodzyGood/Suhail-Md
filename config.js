const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348054601471";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348054601471";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";
global.autowelcome = process.env.AUTO_WELCOME || "true"

//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";
global.antilink= process.env.ANTILINK || "true"
global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";
global.ban_from_typing = process.env.BAN_FROM_TALKING || "true"

global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_32_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDk1LFxuICAgICAgICA5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU4LFxuICAgICAgICA1NixcbiAgICAgICAgOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDU5LFxuICAgICAgICA2OSxcbiAgICAgICAgODIsXG4gICAgICAgIDczLFxuICAgICAgICAxOTksXG4gICAgICAgIDU2LFxuICAgICAgICA5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxODksXG4gICAgICAgIDE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDc5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDksXG4gICAgICAgIDcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWklQTUIyTjFPbFdhdFY5dDNOZlBoa090b0NYNWhLVmIybDVBSWlsdEw0Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibE1iMWp4VmRURkdfaTlDeEFkXzFmQVwiLFxuICBcInBob25lSWRcIjogXCJlYzNkYjJhYS02ODExLTQxY2QtYmJkMi0wMmM4OWU2MzZkZTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICAzNixcbiAgICAgIDUwLFxuICAgICAgMTQ4LFxuICAgICAgMjA2LFxuICAgICAgNCxcbiAgICAgIDc5LFxuICAgICAgMixcbiAgICAgIDE0NyxcbiAgICAgIDE5NixcbiAgICAgIDcxLFxuICAgICAgMjU0LFxuICAgICAgMTU4LFxuICAgICAgMTQ1LFxuICAgICAgMzAsXG4gICAgICAyMDQsXG4gICAgICAyMDksXG4gICAgICAzNCxcbiAgICAgIDEzLFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMjAzLFxuICAgICAgNixcbiAgICAgIDU1LFxuICAgICAgMTA2LFxuICAgICAgMTIsXG4gICAgICA2NCxcbiAgICAgIDIyMyxcbiAgICAgIDIwLFxuICAgICAgMjUyLFxuICAgICAgOTIsXG4gICAgICAxMDcsXG4gICAgICAyNTUsXG4gICAgICAyMDYsXG4gICAgICAzMSxcbiAgICAgIDE2MyxcbiAgICAgIDEwNCxcbiAgICAgIDgwLFxuICAgICAgMTYyLFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJES1JUWFdSXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDU0NjAxNDcxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxODQ4MTA5NDA4NjcwMDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08yYTJaY0RFTnFwdTdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN0xFL3RGQWZ3M2VzMzBKMEJoNTlsQ2FyYUUxUnVkaFh3MlRUZ1BFVzZndz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaZTF4anFXNzJLWVdvL0V5cXRzSlRoNG9RM3dnQVdpTFhTRitnRkViZkxxdC9GZERBNitOb2U1L2RibGlyUXowTlgyVHZweHlGbXpmQlZSN3JrT2xEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPR1RQanZjRDR6Qm9zUE14cE15RU5ueFppLzdvcU1UUzlkTXVMVFY5clBtNExpTVVubys3aThYSGNyY3RGRmxqY09HR2VzV3BBcnRLQlMzamRyY1RoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDU0NjAxNDcxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjQ0MjMzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdBblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR0FuLmpzb24iOiAie1wia2V5RGF0YVwiOlwidXJacThGdG1reWRrUFdpekErZVNuZXpqY3ltb3VrbGduSGRYbkdxVWN4ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NTUwMDI0NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjQ0MjM0MzE2OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "GoodzyGood",
  packname: process.env.PACK_NAME || "GoodzyGood",
  botname : process.env.BOT_NAME  || "GoodzyGood",
  ownername:process.env.OWNER_NAME|| "GoodzyGood",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

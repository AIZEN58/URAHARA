import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let videoUrl = 'https://telegra.ph/file/2e8338d1327f0dc89e36c.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = `Nezuko-BOT 

_*╔══════════════════════════*_
 _*مرحبا انا ماكيما بوت*_
_*══════════════════════════*_
 _*< إحصائياتك />*_
 ▢ *اسمك:* ${taguser}
 ♪ *مستوى:* ${level}
 ▢ *خبرة:* ${exp}
 ▢ *يتراوح:* ${role}
 ▢ *الماس:* ${limit}
 ▢ *نقودك:* ${money}
 ▢ *الرموز:* ${joincount}
 ▢ *مميز:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
 ${readMore}

_*══════════[ قسم القروب]══════════*_
_*❖⇚❘「ضيف」*_ 
_*❖⇚❘「طرد」*_ 
_*❖⇚❘「ترقية」*_ 
_*❖⇚❘「اعفاء」*_ 
_*❖⇚❘「انذار」*_ 
_*❖⇚❘「حذف الإنذار」*_ 
_*❖⇚❘「حذف」*_ 
_*❖⇚❘「منشن」*_ 
_*❖⇚❘「مخفي」*_ 
_*❖⇚❘「المشرفين」*_ 
_*❖⇚❘「بروفايل」*_ 
_*❖⇚❘「الجروب」*_ 
_*❖⇚❘「دعوة」*_ 
_*❖⇚❘「تغيير اللينك」*_ 
_*❖⇚❘「لفل」*_ 
_*❖⇚❘「الترحيب」*_ 
_*❖⇚❘「المغادرة」*_ 
_*❖⇚❘「ايات」*_ 
_*❖⇚❘「جروب قفل/فتح」*_ 
_*❖⇚❘「خط」*_ 
_*❖⇚❘「توب」*_ 
_*❖⇚❘「لينك」*_ 
_*❖⇚❘「يومي」*_ 
_*❖⇚❘「الماس」*_ 
_*❖⇚❘「ترتيب البنك」*_ 
_*❖⇚❘「هجوم」*_
_*══════════[ قسم الدين]══════════*_
_*❖⇚❘「سورة」*_
_*❖⇚❘「حديث」*_
_*❖⇚❘「الله」*_
_*══════════[ قسم المطور]══════════*_
_*❖⇚❘「ضيف_بريميام」*_
_*❖⇚❘「حذف_بريميام」*_
_*❖⇚❘「بان」*_
_*❖⇚❘「الغاء-بان」*_
_*❖⇚❘「اطفاء」*_
_*❖⇚❘「تفعيل」*_
_*❖⇚❘「المبندين」*_
_*❖⇚❘「إعادة」*_
_*❖⇚❘「اعادةتشغيل」*_
_*❖⇚❘「أدخل」*_
_*❖⇚❘「ضيف_اكس_بي」*_
_*❖⇚❘「ضيف_جواهر」*
_*══════════[ قسم التنزيل]══════════*_
_*❖⇚❘「انستا」*_
_*❖⇚❘「شغل」*_
_*❖⇚❘「تيكتوك」*_
_*❖⇚❘「تويتر」*_
_*❖⇚❘「اغنية」*_
_*❖⇚❘「بحث」*_
_*❖⇚❘「فيديو」*_
_*❖⇚❘「تطبيق」*_
_*❖⇚❘「صوره」*_
_*❖⇚❘「صور」*_
_*══════════[ قسم المتعة]══════════*_
_*❖⇚❘「اكس او」*_
_*❖⇚❘「كت」*_
_*❖⇚❘「صراحه」*_
_*❖⇚❘「لو」*_
_*❖⇚❘「هل」*_
_*❖⇚❘「ترجم」*_
_*❖⇚❘「احزر」*_
_*❖⇚❘「زواج」*_
_*❖⇚❘「انطق」*_
_*❖⇚❘「تاج」*_
_*❖⇚❘「حكمه」*_
_*❖⇚❘「ميمز」*_
_*❖⇚❘「سؤال」*_
_*❖⇚❘「عين」*_
_*❖⇚❘「احزر」*_
_*❖⇚❘「رياضة」*_
_*❖⇚❘「علم」*_
_*══════════[ قسم التحويل]═════════*_
_*❖⇚❘「ملصق」*_
_*❖⇚❘「سرقة」*_
_*❖⇚❘「لفيديو」*_
_*❖⇚❘「لصورة」*_
_*❖⇚❘「لانمي」*_
_*❖⇚❘「تخيل」*_
_*❖⇚❘「مكس」*_
_*❖⇚❘「لجواهر」*_
_*❖⇚❘「ستك」*_
_*❖⇚❘「تلجراف」*_
_*❖⇚❘「لكرتون」*_
_*❖⇚❘「باركود 」*_
_*══════════[ قسم الصوتيات]════════*_
_*❖⇚❘「عميق」*_
_*❖⇚❘「منفوخ」*_
_*❖⇚❘「تخينن」*_
_*❖⇚❘「رفيع」*_
_*❖⇚❘「روبوت」*_
_*❖⇚❘「بطيء」*_
_*❖⇚❘「ناعم」*_
_*❖⇚❘「سنجاب」*_

`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['المهام'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }

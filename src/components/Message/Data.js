export const MESSAGE_STATUS = {
  SEEN: "seen",
  FORWADED: "forwarded",
  DELIVERED: "delivered",
};

export const DATA = [
  {
    id: 1,
    otherUser: {
      userName: "Cem K.",
      profilePhoto: require("../../assets/image/cem-karaca.jpg"),
      isActive: true,
      lastSeenAt: Date.now(),
      case: "Müsait",
    },
    messages: [
      {
        text: "Ne sen bunun farkındasın ne de polis farkında",
        isSelf: true,
        time: "23:53",
        status: "forwarded",
      },
      {
        text: "Ben bir ceviz ağacıyım Gülhane parkında",
        isSelf: false,
        time: "23:52",
        status: "forwarded",
      },
      {
        text: "Kopar ver gözlerimin gülüm yaşını sil",
        isSelf: true,
        time: "23:51",
        status: "seen",
      },
      {
        text: "Yapraklarım suda balık gibi, kıvıl kıvıl",
        isSelf: false,
        time: "23:50",
        status: "forwarded",
      },
      {
        text: "Ben bir ceviz ağacıyım Gülhane parkında",
        isSelf: true,
        time: "23:49",
        status: "seen",
      },
      {
        text: "Ben bir ceviz ağacıyım Gülhane parkında",
        isSelf: false,
        time: "23:48",
        status: "forwarded",
      },
      {
        text: "Ne sen bunun farkındasın, ne polis farkında",
        isSelf: false,
        time: "23:48",
        status: "forwarded",
      },
      {
        text: "Budak budak, serhan serhan ihtiyar bir ceviz",
        isSelf: true,
        time: "23:47",
        status: "seen",
      },
      {
        text: "Ben bir ceviz ağacıyım, Gülhane parkında",
        isSelf: false,
        time: "23:46",
        status: "seen",
      },
      {
        text: "Başım köpük köpük bulut içim dışım deniz",
        isSelf: true,
        time: "23:45",
        status: "seen",
      },
    ],
  },

  {
    id: 2,
    otherUser: {
      userName: "Erkin K.",
      profilePhoto: require("../../assets/image/erkin-koray.jpg"),
      isActive: true,
      lastSeenAt: Date.now(),
      case: "Müsait",
    },
    messages: [
      {
        text: "Yok mu çaresi, dostlar? Fesüphanallah",
        isSelf: true,
        time: "20:34",
        status: "forwarded",
      },
      {
        text: "Yok mu çaresi, dostlar? Fesüphanallah",
        isSelf: false,
        time: "20:33",
        status: "forwarded",
      },
      {
        text: "Böyle gelmiş, böyle gidecek, korkarım vallah",
        isSelf: true,
        time: "20:32",
        status: "seen",
      },
      {
        text: "Böyle gelmiş, böyle gidecek, korkarım vallah",
        isSelf: false,
        time: "20:29",
        status: "forwarded",
      },
      {
        text: "Bize de bir gün kader güler, güler inşallah",
        isSelf: true,
        time: "20:27",
        status: "seen",
      },
      {
        text: "Âlemin keyfi yerinde yine maşallah",
        isSelf: true,
        time: "20:27",
        status: "seen",
      },
      {
        text: "Yok mu çaresi, dostlar? Fesüphanallah",
        isSelf: false,
        time: "20:25",
        status: "forwarded",
      },
      {
        text: "Böyle gelmiş, böyle gidecek, korkarım vallah",
        isSelf: true,
        time: "20:23",
        status: "seen",
      },
      {
        text: "Biri biterken öbürü de başlar, vermesin Allah",
        isSelf: false,
        time: "20:17",
        status: "seen",
      },
      {
        text: "Arkası gelmez dertlerimin, bıktım illallah",
        isSelf: false,
        time: "20:17",
        status: "seen",
      },
    ],
  },
  {
    id: 3,
    otherUser: {
      userName: "Barış M.",
      profilePhoto: require("../../assets/image/barış-manço.jpg"),
      isActive: true,
      lastSeenAt: Date.now(),
      case: "Müsait",
    },
    messages: [
      {
        text: "Böyle yazmışsa yaradan, kara toprak yeter bana",
        isSelf: true,
        time: "19:07",
        status: "forwarded",
      },
      {
        text: "Selvi boylum senin için, katlanırım bu yazgıya",
        isSelf: false,
        time: "19:06",
        status: "forwarded",
      },
      {
        text: "Gurbet ele düştü yolum, yuvasız kuşlar misali",
        isSelf: false,
        time: "19:06",
        status: "forwarded",
      },
      {
        text: "Kırıldı kanadım kolum. ne yerim var, ne yurdum",
        isSelf: true,
        time: "19:04",
        status: "seen",
      },
      {
        text: "Unutma ki dünya fani, veren Allah alır canı Ben nasıl unuturum seni? can bedenden çıkmayınca",
        isSelf: false,
        time: "19:01",
        status: "forwarded",
      },
      {
        text: "Bütün hüzünlü şarkılar, hatırlatır seni bana",
        isSelf: false,
        time: "19:01",
        status: "forwarded",
      },
      {
        text: "Aşkların en güzelini, yaşamıştık yıllarca",
        isSelf: true,
        time: "19:00",
        status: "seen",
      },
      {
        text: "Bir tek onu saklıyorum, onu da çok görme bana",
        isSelf: false,
        time: "18:59",
        status: "forwarded",
      },
      {
        text: "Kurumuş bir çiçek buldum, mektupların arasında",
        isSelf: true,
        time: "18:57",
        status: "seen",
      },
      {
        text: "Unutma ki dünya fani, veren Allah alır canı Ben nasıl unuturum seni? can bedenden çıkmayınca",
        isSelf: true,
        time: "18:56",
        status: "seen",
      },
      {
        text: "Sana son kez yazıyorum, hatıralar yeter bana",
        isSelf: true,
        time: "18:56",
        status: "seen",
      },
      {
        text: "Üzülme sevdiceğim, bir daha çıkmam karşına",
        isSelf: false,
        time: "18:55",
        status: "seen",
      },
      {
        text: "Bende kalan resimleri, mektupları istemişsin",
        isSelf: true,
        time: "18:54",
        status: "seen",
      },
      {
        text: "Kara haber tez duyulur, unutsun beni demişsin",
        isSelf: false,
        time: "18:53",
        status: "seen",
      },
    ],
  },
];

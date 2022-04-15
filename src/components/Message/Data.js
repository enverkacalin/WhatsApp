export const MESSAGE_STATUS = {
  SEEN: "seen",
  FORWADED: "forwarded",
  DELIVERED: "delivered",
};

export const DATA = [
  {
    otherUser: {
      userName: "Cem K.",
      profilePhoto: null,
      isActive: true,
      lastSeenAt: Date.now(),
      case: "Müsait",
    },
    messages: [
      {
        text: " Başım köpük köpük bulut içim dışım deniz",
        isSelf: true,
        time: "23:45",
        status: MESSAGE_STATUS.SEEN,
      },
      {
        text: "Ben bir ceviz ağacıyım, Gülhane parkında",
        isSelf: false,
        time: "23:46",
        status: MESSAGE_STATUS.SEEN,
      },
      {
        text: "Budak budak, serhan serhan ihtiyar bir ceviz",
        isSelf: true,
        time: "23:47",
        status: MESSAGE_STATUS.SEEN,
      },
      {
        text: "Ne sen bunun farkındasın, ne polis farkında",
        isSelf: false,
        time: "23:47",
        status: MESSAGE_STATUS.FORWADED,
      },
      {
        text: "Ben bir ceviz ağacıyım Gülhane parkında",
        isSelf: false,
        time: "23:47",
        status: MESSAGE_STATUS.FORWADED,
      },
      {
        text: "Ben bir ceviz ağacıyım Gülhane parkında",
        isSelf: true,
        time: "23:47",
        status: MESSAGE_STATUS.SEEN,
      },

      {
        text: "Yapraklarım suda balık gibi, kıvıl kıvıl",
        isSelf: false,
        time: "23:47",
        status: MESSAGE_STATUS.FORWADED,
      },
      {
        text: "Kopar ver gözlerimin gülüm yaşını sil",
        isSelf: true,
        time: "23:47",
        status: MESSAGE_STATUS.SEEN,
      },
      {
        text: "Ben bir ceviz ağacıyım Gülhane parkında",
        isSelf: false,
        time: "23:47",
        status: MESSAGE_STATUS.FORWADED,
      },
      {
        text: "Ne sen bunun farkındasın ne de polis farkında",
        isSelf: true,
        time: "23:47",
        status: MESSAGE_STATUS.FORWADED,
      },
    ],
  },
];

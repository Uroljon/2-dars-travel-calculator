let availableSum = prompt("Alisher og'o, necha so'm puliz bor ?  :)");
let airFare = 500 * 9444.34;
let hotelFee = 250 * 9433.34;
let leisureFee = 120 * 10354.03;
let totalFee = airFare + hotelFee + leisureFee;
alert(availableSum >= totalFee ? "Oq yo’l, Alisher!" : "Alisher, ozgina sabr qilish kerak bo’lar ekan.");

/***********MASALA SHARTI*******************
Alisher chet elga dam olishga bormoqchi. Safar uchun ketadigan xarajatni internetdagi saytlardan qidirib chiqib, quyidagi ro’yxatda berilgan ma’lumotlarni topdi. Ularning ba’zilari AQSh dollarida ko’rsatilgan bo’lsa, ba’zilari yevroda berilgan.

- Borish-kelish samolyot bileti - $500
- Mehmonxona to’lovi (to’liq safar davomiyligi uchun) - $250
- Muzey va ko’ngilochar joylar uchun - 120 yevro

$1 = 9433.34 so’m
1 yevro = 10354.03 so’m
Tuzilishi kerak bo’lgan dastur quyidagi ko’rinishda ishlaydi:

1. Alisher o’zida necha pul bor ekanligini so’mda prompt orqali ko’rsatadi.
2. Xarajatlar dollar va yevrodan so’mga o’tkaziladi.
3. Alisherda yetarlicha pul bo’lsa, consoleda “Oq yo’l, Alisher!” xabari chiqadi.
4. Alisherda yetarlicha pul bo’lmasa, consoleda “Alisher, ozgina sabr qilish kerak bo’lar ekan.” xabari chiqadi.

*/
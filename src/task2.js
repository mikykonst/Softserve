var isEnvelopeFeet = function (envelope1, envelope2) {
  if (envelope1.width > envelope2.width && envelope1.height > envelope2.height) {
      document.write('2 поместиться в 1');
  } else if (envelope1.width < envelope2.width && envelope1.height < envelope2.height) {
      document.write('1 поместиться в 2');
  } else {
      document.write('0');
  }
};
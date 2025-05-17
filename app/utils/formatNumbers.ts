export default function toPersianNumber(number: number) {
  return new Intl.NumberFormat("fa-IR").format(number);
}

export default function getPhone(phone) {
  const rez = phone.replace(/[-\s()]/g, '').replace(/^8|7/, '+7');

  return rez;
}

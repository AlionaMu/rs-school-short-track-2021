/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = [];
  const total = [];

  for (let i = 0; i < domains.length; i++) {
    res.push(domains[i].split('.').reverse());
  }

  res.forEach((el) => {
    let p = '';

    el.forEach((elem) => {
      p += `.${elem}`;
      total.push(p);
    });
  });

  const end = total.filter((item, i, x) => x.indexOf(item) === i);
  const obj = {};
  end.forEach((el) => {
    const q = total.filter((elem) => elem === el).length;
    obj[el] = q;
  });

  return obj;
}

module.exports = getDNSStats;

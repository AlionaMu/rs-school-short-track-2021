/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let suffix = 1;
  const end = [];

  names.forEach((el) => {
    if (!end.includes(el)) {
      end.push(el);
    } else {
      const elem = `${el}(${suffix})`;
      if (!end.includes(elem)) {
        end.push(elem);
      } else {
        suffix++;
        end.push(`${el}(${suffix})`);
      }
    }
  });
  return end;
}

module.exports = renameFiles;

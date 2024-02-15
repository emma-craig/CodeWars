function drawSpider(legSize, bodySize, mouth, eye) {
  const LegSize = {
    1: "^ ^",
    2: "/\\ /\\",
    3: "/╲ ╱\\",
    4: "╱╲ ╱╲",
  };
  const BodySize = {
    1: "()",
    2: "(())",
    3: "((()))",
  };
  const LeftLeg = LegSize[legSize]
    .substr(0, Math.floor(legSize / 2) + 1)
    .trim();
  const RightLeg = LegSize[legSize].substr(Math.floor(legSize / 2) + 1).trim();
  const LeftBody = BodySize[bodySize].substr(0, Number(bodySize)).trim();
  const RightBody = BodySize[bodySize].substr(Number(bodySize), 6).trim();
  const times = Math.pow(2, bodySize) / 2;

  return (
    LeftLeg +
    LeftBody +
    eye.repeat(times) +
    mouth +
    eye.repeat(times) +
    RightBody +
    RightLeg
  );
}

//or
const drawSpider = (ls, bs, m, e) => ll[ls] + '('.repeat(bs) + (e = e.repeat(2 * (bs - 1) || 1)) + m + e + ')'.repeat(bs) + rl[ls];
const ll = [,'^','/\\','/╲','╱╲'];
const rl = [,'^','/\\','╱\\','╱╲'];

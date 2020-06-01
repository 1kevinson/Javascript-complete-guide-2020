const age = [30, 29, 54];

age.push(60);
age.unshift(10);

const namePopularity = [
  { username: "Kev", usages: 5 },
  { username: "Dom", usages: 6 },
];

const kevUsages = namePopularity.find((pers) => pers.username === "Kev").usages;
console.log(kevUsages);

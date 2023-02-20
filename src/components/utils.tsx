export const numberGenerator = ({
  count = 10,
  max = 10,
  min = 0,
}: {
  count?: number;
  max?: number;
  min?: number;
}) => {
  let data: Array<number | undefined> = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(Math.random() * max + min));
  }
  return data;
};

export const labelGenerator = ({
  count = 10,
  length = 3,
}: {
  count?: number;
  length?: number;
}) => {
  let label: Array<string | undefined> = [];
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < count; i++) {
    let result = "";
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    label.push(result);
  }

  return label;
};
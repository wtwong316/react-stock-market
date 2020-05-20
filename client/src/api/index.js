export const fetchDailyData = async (ticker, time) => {
  const response = await fetch(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/chart/${time}?token=Tsk_536fd841bd3446e09e6a7895835fa6c6`
  );
  console.log("fetched: " + ticker);
  const data = await response.json();
  return data.map((val, i) => {
    return { date: data[i].date, close: data[i].close };
  });
};

export const fetchInfo = async (ticker) => {
  const response = await fetch(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/company?token=Tsk_536fd841bd3446e09e6a7895835fa6c6`
  );
  const { symbol, companyName } = await response.json();
  return { symbol, companyName };
};

export const fetchLogo = async (ticker) => {
  const response = await fetch(
    `https://cloud.iexapis.com/stable/stock/${ticker}/logo?token=pk_bc14b78153d24d7d878689bf51c9360d `
  );
  const { url } = await response.json();
  return url;
};

export const fetchCurrentPrice = async (ticker) => {
  const response = await fetch(
    `https://sandbox.iexapis.com/stable/stock/${ticker}/price?token=Tsk_536fd841bd3446e09e6a7895835fa6c6`
  );
  const data = await response.json();
  return data;
};

export const fetchNews = async (ticker) => {
  const response = await fetch(
    `https://cloud.iexapis.com/stable/stock/${ticker}/news/last/3?token=pk_bc14b78153d24d7d878689bf51c9360d`
  );
  const data = await response.json();
  return data;
};
import axios from 'axios';
import { storageService } from './StorageService';
const RATE_URL = 'https://blockchain.info/tobtc?currency=USD&value=1';
const MARKET_URL =
  'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true';
const TRADE_URL =
  'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true';
const AVG_BLOCK =
  'https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true';
export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
  getAvgBlock,
};

async function getRate(coins=1) {
  const rate = storageService.load('currRate');
  if (rate) return Promise.resolve(rate * coins);
  const res = await axios.get(RATE_URL);
  storageService.save('currRate', res.data);
  return res.data * coins;
}

async function getMarketPrice() {
  const marketPrice = storageService.load('marketPrice');
  if (marketPrice) return Promise.resolve(marketPrice);
  const res = await axios.get(MARKET_URL);
  storageService.save('marketPrice', res.data);
  return res.data;
}

async function getConfirmedTransactions() {
  const marketPrice = storageService.load('marketPrice');
  if (marketPrice) return Promise.resolve(marketPrice);
  const res = await axios.get(TRADE_URL);
  storageService.save('marketPrice', res.data);
  return res.data;
}

async function getAvgBlock() {
  const avg = storageService.load('avgBlock');
  if (avg) return Promise.resolve(avg);
  const res = await axios.get(AVG_BLOCK);
  storageService.save('avgBlock', res.data);
  return res.data;
}

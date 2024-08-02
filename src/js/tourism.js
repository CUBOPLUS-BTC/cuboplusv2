const address = "32ixEdVJWo3kmvJGMTZq5jAQVZZeuwnqzo";
const weekSeconds = 604800;
const monthSeconds = 2629746;
const currentDateUnix = Math.floor(Date.now() / 1000);
const lastMonth = currentDateUnix - monthSeconds;
const lastWeek = currentDateUnix - weekSeconds;
const balanceElement = document.getElementById("balance-number");
const changeWeekElement = document.getElementById("change-7d-number");
const changeMonthElement = document.getElementById("change-30d-number");

const getBalance = async () => {
    const result = await fetch(`https://bitcoin.gob.sv/api/address/${address}`);
    const response = await result.json();
    const balance = Math.floor(response.chain_stats.funded_txo_sum / 100000000);
    return balance;
}

const getChanges = async () => {
    const result = await fetch(`https://bitcoin.gob.sv/api/address/${address}/txs/summary`);
    const response = await result.json();

    let valueLastWeek = 0;
    let valueLastMonth = 0;

    for (let i = 0; i < response.length; i++) {
        valueLastWeek += response[i].time > lastWeek ? response[i].value : 0;
        valueLastMonth += response[i].time > lastMonth ? response[i].value : 0;
    }

    const changes = [Math.floor(valueLastWeek / 100000000, 2), Math.floor(valueLastMonth / 100000000)];

    return changes;
}

const animateValue = (element, start, end, duration, prefix = '') => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = prefix + Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", async (e) => {
    const balance = await getBalance();
    const changes = await getChanges();

    animateValue(balanceElement, 0, balance, 1500);
    animateValue(changeWeekElement, 0, changes[0], 1500, '+');
    animateValue(changeMonthElement, 0, changes[1], 1500, '+');
});
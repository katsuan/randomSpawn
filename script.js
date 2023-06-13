// パラメーターを定義する
function getParameters() {
    const params = new URL(window.location.href).searchParams;
    const minX = params.get("mX") || "10";
    const maxX = params.get("MX") || "1400";
    const minY = params.get("mY") || "10";
    const maxY = params.get("MY") || "1900";
    console.log(minX);
    return {
        minX: parseInt(minX, 10),
        maxX: parseInt(maxX, 10),
        minY: parseInt(minY, 10),
        maxY: parseInt(maxY, 10),
    };
}

// 範囲内のランダムな座標を生成する関数
function generateRandomCoordinates() {

    const parameters = getParameters();
    var minX = parameters.minX;  // 範囲の最小X座標
    var maxX = parameters.maxX; // 範囲の最大X座標
    var minY = parameters.minY; // 範囲の最小Y座標
    var maxY = parameters.maxY; // 範囲の最大Y座標

    var randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    var randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    return randomX + ',' + randomY;
}

// ランダムな座標を含むURLにリダイレクトする
window.location.href = 'https://wao-mirai.ovice.in/@' + generateRandomCoordinates();
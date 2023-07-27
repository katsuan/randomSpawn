// パラメーターを定義する
function getParameters() {
    const params = new URL(window.location.href).searchParams;
    const defaultValue = (param, value) => params.get(param) || value.toString();
    const minX = defaultValue("x", 10);
    const maxX = defaultValue("X", 1400);
    const minY = defaultValue("y", 10);
    const maxY = defaultValue("Y", 1900);
    const redirectTo = defaultValue("space", "wao-mirai");

    return {
        minX: parseInt(minX, 10),
        maxX: parseInt(maxX, 10),
        minY: parseInt(minY, 10),
        maxY: parseInt(maxY, 10),
        redirectTo,
    };
}

// 範囲内のランダムな座標を生成する関数
function generateRandomCoordinates() {
    const parameters = getParameters();
    const { minX, maxX, minY, maxY } = parameters;

    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
    const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

    return randomX + ',' + randomY;
}

// ランダムな座標を含むURLにリダイレクトする
const redirectTo = getParameters().redirectTo;
const redirectURL = 'https://' + redirectTo + '.ovice.in/@' + generateRandomCoordinates()
window.location.href = redirectURL;
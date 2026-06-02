

/**
 * @param {Number} K
 * @param {Number} M
 * @return {Number}
 */
function findSmallestN(K, M) {
    const kBig = BigInt(K);
    const mBig = BigInt(M);

    function countWithPrefix(P, N) {
        let count = 0n;
        let curr = P;
        let next = P + 1n;
        while (curr <= N) {
            let limit = N + 1n;
            if (next < limit) {
                count += next - curr;
            } else {
                count += limit - curr;
            }
            curr *= 10n;
            next *= 10n;
        }
        return count;
    }
    function getRank(N, K) {
        if (N < K) return 0;
        let rank = 0n;
        const sK = K.toString();
        let prefix = "";

        for (let i = 0; i < sK.length; i++){
            const currentDigit = BigInt(sK[i])
            const startDigit = (i === 0) ? 1n : 0n;
            for (let d = startDigit; d < currentDigit; d++){
                const p = prefix + d.toString();
                rank += countWithPrefix(BigInt(p), N)
            }
            if (i > 0)
            {
                rank += 1n;
            }
            prefix += sK[i]
        }
        rank += 1n;
        return rank;
    }
    if (getRank(kBig, kBig) > mBig) {
        return 0;
    }
    let low = kBig;
    let high = 10n ** 26n

    let ans = -1n

    while (low <= high) {
        let mid = low + (high - low) / 2n;
        let currentRank = getRank(mid, kBig);
        if (currentRank === mBig) {
            ans = mid
            high =mid-1n
        }
        else if(currentRank < mBig) {
            low = mid + 1n
        } else {
            high = mid - 1n
        }
    }
    return ans === -1n ? 0 : ans.toString();
}
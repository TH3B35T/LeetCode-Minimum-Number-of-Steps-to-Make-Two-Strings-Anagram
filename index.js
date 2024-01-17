/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    function counter(arr){
        const counter = {};

        for(let item of arr){
            counter[item] = (counter[item] || 0) + 1
        }
        return counter;
    }

    const s_counter = counter(s);
    const t_counter = counter(t);

    let count = 0;
    console.log(s_counter,t_counter)
    for(let c in s_counter){
        if(t_counter[c]){
            if(t_counter[c] == s_counter[c])
                count += s_counter[c]
            else
                count += Math.min(s_counter[c],t_counter[c])
        }
    }

    return t.length - count;

};

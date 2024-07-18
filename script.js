document.getElementById("loveForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the input values
    const yname = document
        .getElementById("yname")
        .value.toLowerCase()
        .replace(/\s+/g, "");
    const tname = document
        .getElementById("tname")
        .value.toLowerCase()
        .replace(/\s+/g, "");

    // Add "loves" between both names
    const str = yname + "loves" + tname;

    // Convert string to charArray
    const arr = str.split("");

    // Count number of similar characters from names
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        let ch = arr[i];
        if (ch === "*") continue;
        let count = 0;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] === ch && arr[j] !== "*") {
                count++;
                arr[j] = "*";
            }
        }
        list.push(count);
    }

    // Reducing the number to percentage
    let left = 0;
    let right = list.length - 1;
    while (right > 1) {
        left = 0;
        while (left < right) {
            list[left] = list[left] + list[right];
            left++;
            right--;
        }
    }

    // If percentage comes more than 100
    const ones = list[0];
    const tens = list[1];

    let result = list[0] * 10 + list[1];

    // Display the result
    let ans = 0;
    if (result <= 100) {
        ans = result;
    } else if (result > 100 && result < 199) {
        ans = 1 + (result % 10);
        result = Math.floor(result / 10);
        ans = ans * 10 + (result % 10);
    } else {
        document.getElementById("result").textContent = "Invalid Names";
    }

    if (ans <= 50) {
        document.getElementById(
            "result"
        ).textContent = `${yname.toUpperCase()}'s affection for ${tname.toUpperCase()} is : ${ans}% 
        Your budding connection holds the promise of a delicate flower, waiting for the gentle caress of sunlight to bloom in full grace. Embrace this journey of growth and discovery together.`;
    } else if (ans > 50 && ans <= 70) {
        document.getElementById(
            "result"
        ).textContent = `${yname.toUpperCase()}'s affection for ${tname.toUpperCase()} is : ${ans}% Your bond glows like a flickering flame, promising enduring warmth and a journey towards deeper intimacy. Cherish each moment as you nurture your connection.`;
    } else if (ans > 70 && ans <= 90) {
        document.getElementById(
            "result"
        ).textContent = `${yname.toUpperCase()}'s affection for ${tname.toUpperCase()} is : ${ans}% Your love is profound, finding solace in each other's embrace, where hearts beat in perfect harmony. Celebrate the depth of your connection and the joy it brings.`;
    } else if (ans > 90) {
        document.getElementById(
            "result"
        ).textContent = `${yname.toUpperCase()}'s affection for ${tname.toUpperCase()} is : ${ans}% Your love transcends words, a symphony of passion and devotion resonating within your intertwined souls, destined to flourish in timeless unity. Treasure the profound bond you share and the boundless possibilities ahead.`;
    }
});


// Reset form function
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('loveForm').reset();
    document.getElementById('result').textContent = '';
});

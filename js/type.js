new TypeIt(".selfintro", {
    strings: ["<span class='text-success'>/*Self Introduction*/</span>", 
            "<span class='text-warning'>.whoAmI</span> <span class='text-muted'>{</span>", 
            "    <span class='text-violet'>firstName:</span> <span class='text-light'>Eol;</span>",
            "    <span class='text-violet'>lastName:</span> <span class='text-light'>Nuha;<span>",
            "    <span class='text-violet'>from:</span> <span class='text-light'>Kosovo;<span>", 
            "<span class='text-muted'>}</span>"],
    speed: 50,
    waitUntilVisible: true
    }).go();

    new TypeIt(".whatido", {
    strings: ["<span class='text-warning'>.whatIDo</span> <span class='text-muted'>{</span>",
            "    <span class='text-violet'>profession:</span> <span class='text-light'>Software Engineer;</span>",
            "    <span class='text-violet'>frontEnd:</span> <span class='text-light'>CSS, JS, React, Vue;<span>", 
            "    <span class='text-violet'>backEnd:</span><span class='text-light'> Python, Java, C++, Groovy; </span>", 
            "<span class='text-muted'>}</span>"],
    speed: 50,
    startDelay: 9000,
    waitUntilVisible: true
    })
    .go();
    new TypeIt(".currentage", {
        strings: ["<span class='text-success'>#Check Age</span>", 
            "<span class='text-violet'>from</span> <span class='text-white'>datetime</span> <span class='text-violet'>import</span> <span class='text-white'>datetime</span>",
            "<span class='text-violet'>if </span> <span class='text-white'>datetime.now() < '12 Aug 2021':</span>", 
            "    <span class='text-warning'>print(</span><span class='text-orange'>'I am still 17'</span><span class='text-warning'>)</span>",
            "<span class='text-violet'>else:</span>",
            "    <span class='text-warning'>print(</span><span class='text-orange'>'I am 18 now!'<span><span class='text-warning'>)</span>"],
    speed: 50,
    startDelay: 20000,
    waitUntilVisible: true
    }).go();
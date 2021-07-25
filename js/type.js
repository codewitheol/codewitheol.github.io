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
            "    <span class='text-violet'>profession:</span> <span class='text-light'>Software Developer;</span>",
            "    <span class='text-violet'>frontEnd:</span> <span class='text-light'>CSS, JavaScript, ReactJs, VueJs;<span>", 
            "    <span class='text-violet'>backEnd:</span><span class='text-light'> Python, Java, C++, Groovy; </span>", 
            "    <span class='text-violet'>hobbies:</span><span class='text-light'> Algorithms, Chess, Voley; </span>", 
            "<span class='text-muted'>}</span>"],
    speed: 50,
    startDelay: 9000,
    waitUntilVisible: true
    })
    .go();
    new TypeIt(".education", {
        strings: ["<span class='text-warning'>fetchEducation()</span> <span class='text-muted'>{</span>",
            "    <span class='text-violet'>axios.</span><span class='text-light'>get</span><span class='text-muted'>(</span><span class='text-orange'>`/education/highchool`</span><span class='text-muted'>)</span><span class='text-warning'>.then</span><span class='text-muted'>(</span><span class='text-light'>response </span><span class='text-primary'>=></span> <span class='text-muted'>{</span>",
            "        <span class='text-primary'>this.</span><span class='text-violet'>schoolName</span><span class='text-secondary'> = </span><span class='text-white'>Kuvendi-Arberit;</span>",
            "        <span class='text-primary'>this.</span><span class='text-violet'>schoolMajor</span><span class='text-secondary'> = </span><span class='text-white'>Natural-Sciences;</span>",
            "        <span class='text-primary'>this.</span><span class='text-violet'>GPA</span><span class='text-secondary'> = </span><span class='text-white'>5.0/5.0;</span>", 
            "<span class='text-muted'>})}</span>"],
    speed: 50,
    startDelay: 23000,
    waitUntilVisible: true
    }).go();
    new TypeIt(".currentage", {
        strings: ["<span class='text-success'>#Check Age</span>", 
            "<span class='text-violet'>from</span> <span class='text-white'>datetime</span> <span class='text-violet'>import</span> <span class='text-white'>datetime</span>",
            "<span class='text-violet'>if </span> <span class='text-white'>datetime.now() < '12 Aug 2021':</span>", 
            "    <span class='text-warning'>print(</span><span class='text-orange'>'I am still 17'</span><span class='text-warning'>)</span>",
            "<span class='text-violet'>else:</span>",
            "    <span class='text-warning'>print(</span><span class='text-orange'>'I am 18 now!'<span><span class='text-warning'>)</span>"],
    speed: 50,
    startDelay: 37000,
    waitUntilVisible: true
    }).go();
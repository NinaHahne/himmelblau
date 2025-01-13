<div class="flex flex-col items-center">
    <p class="text-center text-deep-moss">
        Im kleinen 
        <a 
            class="text-stem-green hover:text-bluebell transition-colors duration-300"
            href="https://www.stadtteilzeitung-schoeneberg.de/2009/oktober/19.htm" 
            target="_blank">
            Blumenladen
        </a>
        himmelblau
        <br>
        gibt es schöne Blumen für
        <br>
        Liebeserklärungen, Hochzeiten und
        <br>
        auch für die einfachen kleinen Anlässe.
    </p>
    
    <div class="door-frame m-8">
        <img 
            src="/images/Tuer.webp" 
            alt="himmelblaue Ladentür" 
            class="door" 
        />
    </div>
    <p class="opening-hours text-center text-bluebell">
        Die himmelblaue Ladentür
        <br>
        öffnet sich in dieser Woche <strong class="text-coral">*)</strong>
        <br>
        am Freitag & Samstag
        <br>
        12°°- 18°° 
    </p>
    <p id="adress" class="text-deep-moss text-center m-2">
        Markelstraße 13<br>   
        12163 Berlin Steglitz 
    </p>
    <p id="mona" class="text-deep-moss text-center m-2">
        Mona Hahne<br>
        "Frau Himmelblau"
    </p>
    <div id="contact" class="text-deep-moss text-center">

        <a 
            class="text-stem-green hover:text-bluebell transition-colors duration-300"
            href="mailto:blumen@himmelblau.de">
            blumen@himmelblau.de
        </a>
    </div>
    <p id="opening_hours-details" class="text-deep-moss w-full text-sm m-4">
        <strong class="text-base text-coral">*)</strong> Die Öffnungszeiten<br>
        des kleinen Blumenladens<br>
        wechseln manchmal ein wenig,<br>
        denn es gibt viele Orte<br>
        und oft auch schöne Feste,<br>
        die Frau Himmelblau mit<br>
        himmelblauen & bunten Blumen<br>
        schmücken darf.<br>
        <br><br>
        Raumdekorationen <br>
        und besondere Bestellungen<br>
        für Hochzeiten, Geburtstage,<br>
        Taufen und Trauerfeiern<br>
        sind -nach Absprache- an<br>
        allen Tagen der Woche möglich!
    </p>
</div>

<style>
    .door-frame {
        perspective: 1000px;
        background-color: #cdeaf7;
    }
    .door {
        cursor: pointer;
        width: 160px;
        height: auto;
        color: #223928;
        transition: transform 0.3s ease-in-out;
        transform-origin: left center;
    }

    .door-frame:hover .door {
        transform: rotateY(24deg);
    }
</style>
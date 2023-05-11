import Chart from 'chart.js/auto'

(async function () {
    const data1 = [
        { time: "6:00", count: 0 },
        { time: "8:00", count: 0 },
        { time: "10:00", count: 4 },
        { time: "12:00", count: 9 },
        { time: "14:00", count: 10 },
        { time: "16:00", count: 9 },
        { time: "18:00", count: 9 },
        { time: "20:00", count: 9 },
        { time: "22:00", count: 8 },
        { time: "0:00", count: 6 },
        { time: "2:00", count: 0 },
    ];
    new Chart(
        document.getElementById('interview1'),

        {
            type: 'line',
            options: {
                responsive: true,
                scales: {
                    y: { // defining min and max so hiding the dataset does not change scale range
                        min: 0,
                        max: 12,
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function (value, index, ticks) {
                                return 'Intensitaet' + value;
                            }
                        },
                    }
                },

            },
            data: {
                labels: data1.map(row => row.time),
                datasets: [{
                    label: 'Intensität der Mediennutzung',
                    data: data1.map(row => row.count),
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0
                }]
            }
        }

    );

    const data2 = [
        { time: "6:00", count: 0 },
        { time: "8:00", count: 10 },
        { time: "10:00", count: 2 },
        { time: "12:00", count: 4 },
        { time: "14:00", count: 0 },
        { time: "16:00", count: 0 },
        { time: "18:00", count: 0 },
        { time: "20:00", count: 0 },
        { time: "22:00", count: 4 },
        { time: "0:00", count: 2 },
        { time: "2:00", count: 0 },
    ];
    new Chart(
        document.getElementById('interview2'),
        {
            type: 'line',
            options: {
                scales: {
                    y: { // defining min and max so hiding the dataset does not change scale range
                        min: 0,
                        max: 12
                    }
                },
            },
            data: {
                labels: data2.map(row => row.time),
                datasets: [{
                    label: 'Intensität der Mediennutzung',
                    data: data2.map(row => row.count),
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0
                }]
            }
        }
    );
    const data3 = [
        { time: "6:00", count: 10 },
        { time: "8:00", count: 0 },
        { time: "10:00", count: 0 },
        { time: "12:00", count: 5 },
        { time: "14:00", count: 0 },
        { time: "16:00", count: 0 },
        { time: "18:00", count: 6 },
        { time: "20:00", count: 8 },
        { time: "22:00", count: 4 },
        { time: "0:00", count: 0 },
        { time: "2:00", count: 0 },
    ];
    new Chart(
        document.getElementById('interview3'),
        {
            type: 'line',
            options: {
                scales: {
                    y: { // defining min and max so hiding the dataset does not change scale range
                        min: 0,
                        max: 12
                    }
                },
            },
            data: {
                labels: data3.map(row => row.time),
                datasets: [{
                    label: 'Intensität der Mediennutzung',
                    data: data3.map(row => row.count),
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0
                }]
            }
        }
    );

    new Chart(
        document.getElementById('mediausage'),
        {
            type: 'bar',
            data: {
                labels: ['Youtube', 'Twitch', 'RSS Feed', 'Spotify', 'TikTok', 'Instagram'],
                datasets: [{
                    label: '# der interviewten Personen',
                    data: [9, 5, 1, 8, 5, 6],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
})();
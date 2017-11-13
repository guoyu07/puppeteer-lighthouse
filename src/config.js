module.exports = function () {
    const _url = [
        'https://www.pokedex.org/'
    ];

    const _audit = {
        passes: [{
            recordTrace: true,
            pauseAfterLoadMs: 5000,
            useThrottling: true,
            gatherers: [],
        }],

        audits: [
            'first-meaningful-paint',
            'speed-index-metric',
            'estimated-input-latency',
            'first-interactive',
            'consistently-interactive',
        ],

        categories: {
            performance: {
                name: 'Performance',
                description: 'This category judges your performance',
                audits: [
                    {
                        id: 'first-meaningful-paint',
                        weight: 2,
                        group: 'perf-metric'
                    },
                    {
                        id: 'first-interactive',
                        weight: 3,
                        group: 'perf-metric'
                    },
                    {
                        id: 'consistently-interactive',
                        weight: 5,
                        group: 'perf-metric'
                    },
                ],
            }
        },

        groups: {
            'perf-metric': {
                title: 'Metrics',
                description: 'These metrics encapsulate your app\'s performance across a number of dimensions.'
            },
        }
    };

    return {
      audit: _audit,
      url: _url
    }
};
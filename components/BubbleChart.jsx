import BubbleChart from '@weknow/react-bubble-chart-d3';

const Bubble = () => {
    return (
        <BubbleChart
            width={500}
            height={600}
            showLegend={false}
            legendPercentage={100}
            valueFont={{
                size: 0,
            }}
            labelFont={{
                size: 12,
                color: '#fff',
                weight: 'bold',
            }}
            graph={{
                zoom: 1.1,
                offsetX: -0.05,
                offsetY: -0.01,
            }}
            data={[
                { label: 'Web Development', value: 50, color: '#892c4c'},
                { label: 'Data Science', value: 15, color: '#d6975e' },
                { label: 'Mechine Learning', value: 70, color: '#6e0646' },
                { label: 'Mobile', value: 6, color: '#f4c165' },
                { label: 'Front-End', value: 40, color: '#892c4c' },
                { label: 'Back-End', value: 23, color: '#a14d51' },
                { label: 'UX/UI', value: 35, color: '#9a4450' },
                { label: 'AI', value: 10, color: '#d6975e' },
                { label: 'Design', value: 20, color: '#a14d51' },
                { label: 'Database', value: 8, color: '#f4c165'},
                { label: 'API', value: 20, color: '#a14d51' },
                { label: 'DevOps', value: 3, color: '#f4c165' },
            ]}
        />
    );
}

export default Bubble;
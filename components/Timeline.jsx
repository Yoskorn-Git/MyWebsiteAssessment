import { Timeline, Events, Event } from 'vertical-timeline-component-react';

const SelfTimeline = () => {
    const customTheme = {
        borderDotColor: '#ffffff',
        descriptionColor: 'black',
        dotColor: '#DC6B19',
        eventColor: '#965500',
        lineColor: '#F7C566',
        subtitleColor: '#7c7c7c',
        titleColor: '#6C0345',
        yearColor: '#405b73',
    };

    return (
        <Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse withoutDay>
            <Events
                title="Apply of Front-end Engineer at Biscuit Studio"
                startDate="2024/03/05"
                Active
                defaultClosed={false}
            >
                <Event
                    title="Detail"
                    description={[
                        "Interviewing",
                    ]}
                />
            </Events>

            <Events
                title="Freelance Developer"
                startDate="2023/01/01"
                endDate="2023/05/01"
                defaultClosed={false}
            >
                <Event
                    title="Detail"
                    description={[
                        "Developed a system using computer vision and Deep Neural Networks to classify infected silkworms, along with a user-friendly web interface using Python.",
                        "Trained Deep Neural Network models to identify infections based on movement, enhancing detection accuracy for improved sericulture management."
                    ]}
                />
            </Events>

            <Events
                title="Software Developer Intern"
                subtitle="Geneus Genetics CO., LTD"
                startDate="2022/03/01"
                endDate="2022/06/01"
                defaultClosed={false}
            >
                <Event
                    title="Detail"
                    description={[
                        "Developed ELT processes using Python and Apache Spark to efficiently extract, transform, and load data from raw text files into AWS Cloud storage.",
                        "Developed API applications utilizing Flask and REST API to query processed data, containerized, and deployed on AWS."
                    ]}
                />
            </Events>

            <Events
                title="Publish Thai stock market price prediction model project"
                subtitle="MDPI"
                startDate="2022/09/25"
                defaultClosed={false}
            >
                <Event
                    title="Detail"
                    description={[
                        "Developed a hybrid prediction framework combining Principal Component Analysis (PCA), Empirical Mode Decomposition, and Long Short-term Memory (LSTM) to forecast stock market closing prices.",
                        "Published in a Q2-ranked international journal.",
                        "https://www.mdpi.com/2076-3417/12/21/10823"
                    ]}
                />
            </Events>

            <Events
                title="Graduate from Thammasat University"
                startDate="2022/05/01"
                defaultClosed
            >
                <Event
                    title="Detail"
                    description={[
                        "Bachelor of Computer Science Minor in Data Science",
                        "GPAX: 3.83",
                        "First-class honors.",
                        "Vice President, Student Committee of Faculty of Science and Technology, Thammasat University"
                        
                    ]}
                />
            </Events>

            <Events
                title="Publich Northern Thai Food Recommendation System for Travelers"
                subtitle="AUCC"
                startDate="2021/09/25"
                defaultClosed={false}
            >
                <Event
                    title="Detail"
                    description={[
                        "Northern Thai Food Recommendation System for Travelers is a mobile application designed to assist foreign travelers in exploring Thai cuisine and making informed dining choices. The app utilizes smartphone cameras for food recognition and menu translation, providing users with detailed information about dishes and personalized food recommendations.",
                    ]}
                />
            </Events>

            <Events
                title="Birthday"
                startDate="2000/03/23"
                defaultClosed
            >
                <Event
                    title="Detail"
                    description={[
                        "Celebrating my birthday!"
                    ]}
                />
            </Events>


        </Timeline>
    );
};

export default SelfTimeline
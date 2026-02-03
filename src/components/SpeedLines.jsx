// Speed Lines Component - Diagonal racing aesthetic
export default function SpeedLines() {
    const lines = [
        { top: '10%', width: '60%', delay: 0 },
        { top: '25%', width: '80%', delay: 0.2 },
        { top: '40%', width: '70%', delay: 0.4 },
        { top: '55%', width: '90%', delay: 0.1 },
        { top: '70%', width: '75%', delay: 0.3 },
        { top: '85%', width: '65%', delay: 0.5 },
    ];

    return (
        <div className="speed-lines">
            {lines.map((line, index) => (
                <div
                    key={index}
                    className="speed-line"
                    style={{
                        top: line.top,
                        width: line.width,
                        animationDelay: `${line.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}

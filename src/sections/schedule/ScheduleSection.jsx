import "./ScheduleSection.css"

export default function Schedule() {

    function buttonBehavior() {
        document.getElementById("get-free-quote").scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <div className="section-schedule">
                <div className="section-schedule__layer">
                    <div className="section-schedule__body">
                        <div className="section-schedule__text">
                            <h2>SCHEDULE YOUR FREE CONSULTATION</h2>
                            <p>For a durable and beautiful roof guaranteed to stand the test of time, meet with your local roofing experts.</p>
                        </div>
                        <button onClick={buttonBehavior}>REQUEST A QUOTE</button>
                    </div>
                </div>
            </div>
        </>
    )
}
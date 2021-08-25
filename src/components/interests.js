export default function Interests({data}){
    const { title, list } = data;
    return (
        <section className ='interests'>
            <h2 className ='intTitle'>{title}</h2>
            <div  className ='grid'>
                {
                    list.map((int) => {
                        return <p>{int.icon}{int.text}</p>
                    })
                }
                
            </div>

        </section>
    )
}
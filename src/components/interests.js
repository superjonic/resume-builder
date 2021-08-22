export default function Interests({data}){
    const { title, list } = data;
    return (
        <section className ="details">
            <h2>{title}</h2>
            <div  className ='grid'>
                <div>
                    <p>{list[0].icon} {list[0].text}</p>
                    <p>{list[1].icon} {list[1].text}</p>
                    <p>{list[2].icon} {list[2].text}</p>
                </div>
                <div>
                    <p>{list[3].icon} {list[3].text}</p>
                    <p>{list[4].icon} {list[4].text}</p>
                    
                </div>
                
                
            </div>
            
                            
            

        </section>
    )
}
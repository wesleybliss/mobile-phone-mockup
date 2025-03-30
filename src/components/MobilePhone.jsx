
const MobilePhone = ({
    imageUrl = '',
} = {}) => {

    return (

        <div className="mobile-phone relative">

            <div className="brove mx-auto opacity-10
                absolute inset-x-0 top-3">
                <span className="speaker" />
            </div>

            <div
                id="screen"
                className="screen shadow-lg shadow-gray-600 dark:shadow-gray-900"
                style={{
                    backgroundImage: `url("${imageUrl}")`,
                }} />
            
            <div className="w-[40%] h-2 mx-auto rounded bg-gray-600
                absolute inset-x-0 bottom-10 opacity-40" />

        </div>

    )

}

export default MobilePhone
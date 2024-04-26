import House from "./House"

const HouseListing = ({ data }: { data: HouseType[] }) => {
    return (
        <div className='panel' id='house-listing'>
            {data.map((house: HouseType, index: number) => (
                <House key={index} house={house} />
            ))}
        </div>
    )
}
export default HouseListing
import { useState } from "react";
import * as Slider from "@radix-ui/react-slider"
import useScreenSize from "./useScreenSize"
import SortFilter from "./SortFilter"
import "./HotelFilterSystem.css"
const HotelFilterSystem = ({ filteredHotels, setFilteredHotels, setShowFilter, setSelectedAmenities, setSelectedRatings }) => {
    const isLargeScreen = useScreenSize()
    const minPrice = 16000
    const [maxPrice, setMaxPrice] = useState([270000]);



    const displayPanel = () => {
        if (isLargeScreen) {
            return (
                <>
                    <div className="display-map">
                        <div>
                            <img src="" alt="" />
                            <button type="submit"></button>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="filter">
                        {/*Sort filter component */}
                        {!isLargeScreen &&
                            <SortFilter filteredHotels={filteredHotels} setFilteredHotels={setFilteredHotels} />}
                        <div className="search-filter">
                            <div className="search-filter_child1">
                                <h2>Filter by</h2>
                                <p>Clear all</p>
                            </div>

                            <div className="search-filter_child2">
                                <input type="search" placeholder="e.g Hilton Hotel" />
                            </div>
                        </div>
                        <div className="slider-filter">
                            <h2>Your Budget ( per night )</h2>
                            <form>
                                <Slider.Root className="slider-root" value={[maxPrice]} min={minPrice} max={270000} step={1000} onValueChange={handlePriceChange}>
                                    <Slider.Track className="slider-track">
                                        <Slider.Range className="slider-range" />
                                    </Slider.Track>
                                    <Slider.Thumb className="slider-thumb" aria-label="Volume" />
                                </Slider.Root>
                            </form>
                            <div className="slider-price">
                                <span>&#8358;{minPrice}</span>
                                <span>&#8358;{maxPrice}</span>
                            </div>
                        </div>

                        <div className="amenities-filter">
                            <h3>Amenities</h3>
                            <form>
                                <label>
                                    <input type="checkbox" value="Air conditioning" onChange={handleAmenitiesChange} />
                                    Air conditioning
                                </label>
                                <label>
                                    <input type="checkbox" value="Bar/lounge" onChange={handleAmenitiesChange} />
                                    Bar/lounge
                                </label>
                                <label>
                                    <input type="checkbox" value="Security" onChange={handleAmenitiesChange} />
                                    Security
                                </label>
                                <label>
                                    <input type="checkbox" value="Kitchen" onChange={handleAmenitiesChange} />
                                    Kitchen
                                </label>
                            </form>
                        </div>

                        <div className="rating-filter">
                            <h4>Property Rating</h4>
                            <form>
                                <label>
                                    <input type="checkbox" value="2" onChange={e => handleRatingSelection(e)} />
                                    2 Stars
                                </label>
                                <label>
                                    <input type="checkbox" value="3" onChange={e => handleRatingSelection(e)} />
                                    3 Stars
                                </label>
                                <label>
                                    <input type="checkbox" value="4" onChange={e => handleRatingSelection(e)} />
                                    4 Stars
                                </label>
                                <label>
                                    <input type="checkbox" value="5" onChange={e => handleRatingSelection(e)} />
                                    5 Stars
                                </label>
                            </form>
                        </div>
                        {applyFilterBtn()}
                    </div>
                </>

            )

        } else {
            return (
                <>
                    <div className="filter">
                        {/*Sort filter component */}
                        {!isLargeScreen &&
                            <SortFilter filteredHotels={filteredHotels} setFilteredHotels={setFilteredHotels} />}

                        <div className="display-map">
                            <div>
                                <img src="" alt="" />
                                <button type="submit"></button>
                                <img src="" alt="" />
                            </div>
                        </div>

                        <div className="search-filter">
                            <div className="search-filter_child1">
                                <h2>Filter by</h2>
                                <p>Clear all</p>
                            </div>

                            <div className="search-filter_child2">
                                <input type="search" placeholder="e.g Hilton Hotel" />
                            </div>
                        </div>
                        <div className="slider-filter">
                            <h2>Your Budget ( per night )</h2>
                            <form>
                                <Slider.Root className="slider-root" value={[maxPrice]} min={minPrice} max={270000} step={1000} onValueChange={handlePriceChange}>
                                    <Slider.Track className="slider-track">
                                        <Slider.Range className="slider-range" />
                                    </Slider.Track>
                                    <Slider.Thumb className="slider-thumb" aria-label="Volume" />
                                </Slider.Root>
                            </form>
                            <div className="slider-price">
                                <span>&#8358;{minPrice}</span>
                                <span>&#8358;{maxPrice}</span>
                            </div>
                        </div>

                        <div className="amenities-filter">
                            <h3>Amenities</h3>
                            <form>
                                <label>
                                    <input type="checkbox" value="Air conditioning" onChange={handleAmenitiesChange} />
                                    Air conditioning
                                </label>
                                <label>
                                    <input type="checkbox" value="Bar/lounge" onChange={handleAmenitiesChange} />
                                    Bar/lounge
                                </label>
                                <label>
                                    <input type="checkbox" value="Security" onChange={handleAmenitiesChange} />
                                    Security
                                </label>
                                <label>
                                    <input type="checkbox" value="Kitchen" onChange={handleAmenitiesChange} />
                                    Kitchen
                                </label>
                            </form>
                        </div>

                        <div className="rating-filter">
                            <h4>Property Rating</h4>
                            <form>
                                <label>
                                    <input type="checkbox" value="2" onChange={e => handleRatingSelection(e)} />
                                    2 Stars
                                </label>
                                <label>
                                    <input type="checkbox" value="3" onChange={e => handleRatingSelection(e)} />
                                    3 Stars
                                </label>
                                <label>
                                    <input type="checkbox" value="4" onChange={e => handleRatingSelection(e)} />
                                    4 Stars
                                </label>
                                <label>
                                    <input type="checkbox" value="5" onChange={e => handleRatingSelection(e)} />
                                    5 Stars
                                </label>
                            </form>
                        </div>
                        {applyFilterBtn()}
                    </div>
                </>

            )

        }
    }
    const applyFilterBtn = () => {
        if (isLargeScreen) {
            return (
                <>
                </>
            )

        } else {
            return (
                <>
                    <div className="apply-filterBtn">
                        <button type="submit">Apply</button>
                    </div>
                </>
            )

        }
    }
    const handlePriceChange = (newValue) => {
        setMaxPrice(newValue[0]);
    }

    const handleAmenitiesChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedAmenities((prev) => [...prev, value]);
        } else {
            setSelectedAmenities((prev) => prev.filter((amenity) => amenity !== value));
        }
    }
    const handleRatingSelection = (e) => {
        const value = parseInt(e.target.value);
        if (e.target.checked) {
            setSelectedRatings(prev => [...prev, value]);
        } else {
            setSelectedRatings(prev => prev.filter(rating => rating !== value));
        }
    }
    const closeFilter = () => {
        setShowFilter((prev) => {
            return !prev
        })
    }

    return (
        <aside>
            <div className="close-button" onClick={closeFilter}>
                <img src="../src/assets/Images/cross-icon.svg" alt="" />
            </div>
            {/* Display the filter panel */}
            {displayPanel()}
        </aside >
    )

}
export default HotelFilterSystem;
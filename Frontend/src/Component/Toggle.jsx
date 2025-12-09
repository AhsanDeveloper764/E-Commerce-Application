import { useEffect, useState } from "react";
import Product from "./data";

export default function sDropdownWithCheckboxes({ setAlllProducts }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  let gather = Product.flatMap((item) => item.Size);
  let UniqueSize = [...new Set(gather)];
  console.log("UniqueSize",UniqueSize);

  let gatherColor = Product.flatMap((item) => item.Color);
  let UniqueColor = [...new Set(gatherColor)];
  console.log("UniqueSize",UniqueColor);

  let gatherCat = Product.flatMap((item) => item.Category);
  let UniqueCat = [...new Set(gatherCat)];
  console.log("UniqueSize",UniqueCat);

  const [alpha, setAlpha] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [minInputValue, setMinInputValue] = useState("");
  const [SelectedColor, setSelectedColor] = useState([]);
  const [SelectedCategory, setSelectedCategory] = useState([]);
  const [SelectedSize, setSelectedSize] = useState([]);
  const [filterProduct, setfilterProduct] = useState([]);
  
  // Selected Color
  // const ColorCheckboxChange = (color) => {
  //   let newColor = [...SelectedColor];
  //   let index = newColor.indexOf(color);
  //   if (index !== -1) {
  //     newColor.splice(index, 1);
  //     // setSelectedColor((newColor)=>newColor.filter((item)=>item!==color))
  //   } else {
  //     setSelectedColor((prev) => [...prev, color]);
  //     // setTimeout(() => {}, 1000);
  //   }
  //   console.log("newColor", newColor);
    // const box = Product.filter((z) => z.Color == color);
    // console.log("box",box);
  // };

  // const [filterProduct , setfilterProduct ] = useState([])
  // const handleUpdate = (state, setState, item) => {
  //   if (typeof state != "object") return alert("invalid data/state");
  //   let index = state.indexOf(item);
  //   // item found in state
  //   if (index !== -1) {
  //     setState((prev) => prev.filter((_item) => _item !== item));
  //   } else {
  //     // item not found in state
  //     setState((prev) => [...prev, item]);
  //   }
  // };

  const handleUpdate = (state, setState, item) => {
    setState((prev) => {
      let updatedState;
      let index = prev.indexOf(item);

      if (index !== -1) {
        updatedState = prev.filter((_item) => _item !== item);
      } else {
        updatedState = [...prev, item];
      }

      return updatedState;
    });
  };
  
  const updateFilteredProducts = () => {
    const filteredProducts = Product.filter((_p) => {
      if(SelectedColor.length  > 0 && SelectedCategory.length > 0) {
        console.log("---------- 1");
        return SelectedColor.some(_item => _p.Color.includes(_item)) && SelectedCategory.includes(_p.Category)
      } 
      else if(SelectedColor.length  > 0 && SelectedCategory.length == 0) {
        console.log("---------- 2");
        return SelectedColor.some(_item => _p.Color.includes(_item))
      }
      else if(SelectedColor.length  == 0 && SelectedCategory.length > 0) {
        console.log("---------- 3");
        return SelectedCategory.includes(_p.Category)
      }
    });


    if (filteredProducts.length === 0) {
      setAlllProducts(Product)
      console.log("No products available for this category and color!");
    } else {
      setAlllProducts(filteredProducts);
      console.log("Filtered Products:", filteredProducts);
    }
  };

  // const ColorCheckboxChange = (color) =>{ 
  //   const box = Product.filter((z) => z.Color == color);
  //   console.log("box",box);
  // }
  

  //Selected category;
  // const CategoryCheckboxChange = (category) => {
  //   let newCategory = [...SelectedCategory];
  //   let index = newCategory.indexOf(category);
  //   if (index !== -1) {
  //     newCategory.splice(index, 1);
  //   } else {
  //     newCategory.push(category);
  //   }
  //   setSelectedCategory(newCategory);
  //   console.log("newCategory", newCategory);

  //   const filterColor = Product.filter((item) => item.Category == category);
  //   console.log("filterColor",filterColor);
  // };

  // SelectedSize
  // const SizeCheckboxChange = (size) => {
  //   let newSize = [...SelectedSize];
  //   let index = newSize.indexOf(size);
  //   if (index !== -1) {
  //     newSize.splice(index, 1);
  //   } else {
  //     newSize.push(size);
  //   }
  //   setSelectedSize(newSize);
  //   console.log("newCategory", newSize);
  // };

  // Max and Min
  const xyz = () => {
    useEffect(() => {
      let max = Product[0].price;
      let min = 0;
      Product.forEach((item) => {
        if (item.price > max) {
          max = item.price;
        } else if (item.price < min) {
          min = item.price;
        }
      });
      setAlpha([max, min]);
    }, []);
  };
  xyz();

  // Max Value
  const MaxhandleCheckboxChange = (e) => {
    const value = Number(e.target.value);
    // setinputValue(value);
    if (alpha) {
      if (value > alpha[0]) {
        alert(`Your Value Exceed Maximum Value $: ${alpha[0]}`);
        setinputValue(alpha[0]);
      } else if (value < 0) {
        setinputValue(0);
      } else {
        setinputValue(value);
      }
    }
  };

  // Min Value
  const MinhandleCheckboxChange = (e) => {
    const value = Number(e.target.value);
    setMinInputValue(value);
    if (value > alpha[0]) {
      setMinInputValue(alpha[1]);
      alert(`Your Value Exceed Maximum Value $: ${alpha[0]}`);
    } else if (value < 0) {
      setMinInputValue(0);
    }
  };

  // Filter Toggle
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // for(let i=0; Product.length>i ; i++){
  //   if(Product[i].price > max){
  //     max = Product[i].price
  //   }else if (Product[i].price<min) {
  //     min = Product[i].price
  //   }
  // }

  return (
    <>
      <div className="dropdown-container">
        {/* Main Dropdown Button */}
        <button className="dropdown-button" onClick={toggleDropdown}>
          {" "}
          Product Filter{" "}
        </button>
        <button onClick={() => updateFilteredProducts()}> Filter Now</button>
        {/* Dropdown Content */}
        {dropdownOpen && (
          <div className="dropdown-content">
            {/* Color Section */}
            <div className="dropdown-section">
              <button className="section-button">Color</button>
              <div className="checkbox-group">
                {UniqueColor.map((color) => (
                  <label key={color}>
                    {/* <input type="checkbox" onChange={() => ColorCheckboxChange(color)} /> */}
                    <input
                      type="checkbox"
                      onChange={() =>handleUpdate(SelectedColor, setSelectedColor, color)}/>
                      {color}
                  </label>
                ))}
              </div>
            </div>

            {/* Category Section */}
            <div className="dropdown-section">
              <button className="section-button">Category</button>
              <div className="checkbox-group">
                {UniqueCat.map((category) => (
                  <label key={category}>
                    {/* <input type="checkbox" onChange={() => CategoryCheckboxChange(category)} /> */}
                    <input
                      type="checkbox"
                      onChange={() =>
                        handleUpdate(
                          SelectedCategory,
                          setSelectedCategory,
                          category
                        )
                      }
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            {/* Size Section */}
            <div className="dropdown-section">
              <button className="section-button">Size</button>
              <div className="checkbox-group">
                {UniqueSize.map((size) => (
                  <label key={size}>
                    {/* <input type="checkbox" onChange={() => SizeCheckboxChange(size)} /> */}
                    <input
                      type="checkbox"
                      onChange={() =>
                        handleUpdate(SelectedSize, setSelectedSize, size)
                      }
                    />
                    {size}
                  </label>
                ))}
              </div>
            </div>

            {/* Price Section */}
            <div className="dropdown-section">
              <button className="section-button">Price</button>
              <div className="checkbox-group">
                <input
                  type="number"
                  onChange={MaxhandleCheckboxChange}
                  value={inputValue}
                />
                Maximum Price : ${alpha[0]}
                <br />
                <input
                  type="number"
                  onChange={MinhandleCheckboxChange}
                  value={minInputValue}
                />
                Lowest Price : ${alpha[1]}
              </div>
            </div>

            {/* <button
              onClick={() =>
                console.log(SelectedColor, SelectedCategory, SelectedSize)
              }
            >
              print
            </button> */}
          </div>
        )}
      </div>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import Product from "./data";

// export default function DropdownWithCheckboxes() {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   let gather = Product.flatMap((item) => item.Size);
//   let UniqueSize = [...new Set(gather)];

//   let gatherColor = Product.flatMap((item) => item.Color);
//   let UniqueColor = [...new Set(gatherColor)];

//   let gatherCat = Product.flatMap((item) => item.Category);
//   let UniqueCat = [...new Set(gatherCat)];

//   const [SelectedColor, setSelectedColor] = useState([]);
//   const [SelectedCategory, setSelectedCategory] = useState([]);
//   const [SelectedSize, setSelectedSize] = useState([]);
//   const [filterProduct, setfilterProduct] = useState([]);

//   // Handle Filtering Logic
//   const handleUpdate = (state, setState, item) => {
//     setState((prev) => {
//       let updatedState;
//       let index = prev.indexOf(item);

//       if (index !== -1) {
//         updatedState = prev.filter((_item) => _item !== item);
//       } else {
//         updatedState = [...prev, item];
//       }

//       updateFilteredProducts(
//         state === SelectedColor ? updatedState : SelectedColor,
//         state === SelectedCategory ? updatedState : SelectedCategory,
//         state === SelectedSize ? updatedState : SelectedSize
//       );

//       return updatedState;
//     });
//   };

//   // Update Filtered Products
//   const updateFilteredProducts = (updatedColor, updatedCategory, updatedSize) => {
//     const box = Product.filter((item) => 
//       (updatedColor.length === 0 || updatedColor.includes(item.Color)) &&
//       (updatedCategory.length === 0 || updatedCategory.includes(item.Category)) &&
//       (updatedSize.length === 0 || updatedSize.includes(item.Size))
//     );

//     setfilterProduct(box);
//     console.log("Filtered Products:", box);
//   };

//   // Max & Min Price Calculation
//   const [alpha, setAlpha] = useState([0, 0]);
//   useEffect(() => {
//     let max = Math.max(...Product.map((item) => item.price));
//     let min = Math.min(...Product.map((item) => item.price));
//     setAlpha([max, min]);
//   }, []);

//   const [inputValue, setinputValue] = useState("");
//   const [minInputValue, setMinInputValue] = useState("");

//   // Max Value
//   const MaxhandleCheckboxChange = (e) => {
//     const value = Number(e.target.value);
//     if (value > alpha[0]) {
//       alert(`Your Value Exceeds Maximum Value: $${alpha[0]}`);
//       setinputValue(alpha[0]);
//     } else if (value < 0) {
//       setinputValue(0);
//     } else {
//       setinputValue(value);
//     }
//   };

//   // Min Value
//   const MinhandleCheckboxChange = (e) => {
//     const value = Number(e.target.value);
//     if (value > alpha[0]) {
//       alert(`Your Value Exceeds Maximum Value: $${alpha[0]}`);
//       setMinInputValue(alpha[1]);
//     } else if (value < 0) {
//       setMinInputValue(0);
//     } else {
//       setMinInputValue(value);
//     }
//   };

//   // Toggle Filter Dropdown
//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <>
//       <div className="dropdown-container">
//         <button className="dropdown-button" onClick={toggleDropdown}>
//           Product Filter
//         </button>

//         {dropdownOpen && (
//           <div className="dropdown-content">
//             {/* Color Section */}
//             <div className="dropdown-section">
//               <button className="section-button">Color</button>
//               <div className="checkbox-group">
//                 {UniqueColor.map((color) => (
//                   <label key={color}>
//                     <input
//                       type="checkbox"
//                       checked={SelectedColor.includes(color)}
//                       onChange={() => handleUpdate(SelectedColor, setSelectedColor, color)}
//                     />
//                     {color}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Category Section */}
//             <div className="dropdown-section">
//               <button className="section-button">Category</button>
//               <div className="checkbox-group">
//                 {UniqueCat.map((category) => (
//                   <label key={category}>
//                     <input
//                       type="checkbox"
//                       checked={SelectedCategory.includes(category)}
//                       onChange={() => handleUpdate(SelectedCategory, setSelectedCategory, category)}
//                     />
//                     {category}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Size Section */}
//             <div className="dropdown-section">
//               <button className="section-button">Size</button>
//               <div className="checkbox-group">
//                 {UniqueSize.map((size) => (
//                   <label key={size}>
//                     <input
//                       type="checkbox"
//                       checked={SelectedSize.includes(size)}
//                       onChange={() => handleUpdate(SelectedSize, setSelectedSize, size)}
//                     />
//                     {size}
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Price Section */}
//             <div className="dropdown-section">
//               <button className="section-button">Price</button>
//               <div className="checkbox-group">
//                 <input
//                   type="number"
//                   onChange={MaxhandleCheckboxChange}
//                   value={inputValue}
//                   placeholder="Max Price"
//                 />
//                 Maximum Price: ${alpha[0]}
//                 <br />
//                 <input
//                   type="number"
//                   onChange={MinhandleCheckboxChange}
//                   value={minInputValue}
//                   placeholder="Min Price"
//                 />
//                 Lowest Price: ${alpha[1]}
//               </div>
//             </div>

//             {/* Filtered Products Display */}
//             <div className="filtered-products">
//               <h3>Filtered Products:</h3>
//               {filterProduct.length > 0 ? (
//                 filterProduct.map((item) => (
//                   <div key={item._id} className="product-item">
//                     <img src={item.img} alt={item.name} />
//                     <p>{item.name}</p>
//                     <p>{item.price} USD</p>
//                     <p>Color: {item.Color}</p>
//                     <p>Category: {item.Category}</p>
//                     <p>Size: {item.Size.join(", ")}</p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No products match the selected filters.</p>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }




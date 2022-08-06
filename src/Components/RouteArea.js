import React from "react";
import Cities from "./Cities";
import { Routes, Route } from "react-router";
import { Data } from "./Data";

const RouteArea = () => {
  return (
    <div id="routeSection">
      <Routes>
        <Route path="/" element={<Cities cities={Data.Mawlamyine} />} />
        <Route
          path="/mawlamyine"
          element={<Cities cities={Data.Mawlamyine} />}
        />

        <Route path="/mudon" element={<Cities cities={Data.Mudon} />} />
        <Route path="/paung" element={<Cities cities={Data.Paung} />} />
        <Route
          path="/thanphyuzayat"
          element={<Cities cities={Data.Thanphyuzayat} />}
        />
        <Route path="/ye" element={<Cities cities={Data.Ye} />} />
        <Route path="/thaton" element={<Cities cities={Data.Thaton} />} />
        <Route path="/kyaikto" element={<Cities cities={Data.Kyaikhto} />} />
        <Route path="/bilin" element={<Cities cities={Data.Bilin} />} />
        <Route path="/chaungzon" element={<Cities cities={Data.Chaungzon} />} />
        <Route
          path="/kyaikmaraw"
          element={<Cities cities={Data.Kyaikmaraw} />}
        />
      </Routes>
    </div>
  );
};

export default RouteArea;

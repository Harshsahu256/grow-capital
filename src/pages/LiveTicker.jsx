import React from "react";

const LiveTicker = () => {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "8px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
        borderTop: "2px solid #e0e0e0",
        borderBottom: "2px solid #e0e0e0",
        position: "relative",
        zIndex: 10,
      }}
    >
      <iframe
        src="https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B
        %7B%22proName%22%3A%22BSE%3ASENSEX%22%2C%22title%22%3A%22SENSEX%22%7D%2C
        %7B%22proName%22%3A%22BSE%3ANIFTYBEES%22%2C%22title%22%3A%22NIFTY%20BEES%22%7D%2C
        %7B%22proName%22%3A%22NSE%3ARELIANCE%22%2C%22title%22%3A%22Reliance%22%7D%2C
        %7B%22proName%22%3A%22NSE%3ATCS%22%2C%22title%22%3A%22TCS%22%7D%2C
        %7B%22proName%22%3A%22NSE%3AINFOSYS%22%2C%22title%22%3A%22Infosys%22%7D%2C
        %7B%22proName%22%3A%22NSE%3AHDFCBANK%22%2C%22title%22%3A%22HDFC%20Bank%22%7D%2C
        %7B%22proName%22%3A%22NSE%3AICICIBANK%22%2C%22title%22%3A%22ICICI%20Bank%22%7D%2C
        %7B%22proName%22%3A%22NSE%3ASBIN%22%2C%22title%22%3A%22SBI%22%7D%2C
        %7B%22proName%22%3A%22NSE%3AAXISBANK%22%2C%22title%22%3A%22Axis%20Bank%22%7D%2C
        %7B%22proName%22%3A%22NSE%3ALT%22%2C%22title%22%3A%22L%26T%22%7D%2C
        %7B%22proName%22%3A%22NSE%3ABAJFINANCE%22%2C%22title%22%3A%22Bajaj%20Finance%22%7D%2C
        %7B%22proName%22%3A%22NSE%3AULTRACEMCO%22%2C%22title%22%3A%22UltraTech%20Cement%22%7D%2C
        %7B%22proName%22%3A%22NSE%3AONGC%22%2C%22title%22%3A%22ONGC%22%7D%5D%2C
        %22showSymbolLogo%22%3Atrue%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22regular%22%7D"
        style={{
          width: "95%",
          height: "45px",
          border: "none",
          borderRadius: "8px",
          background: "transparent",
          overflow: "hidden",
        }}
        title="Live Stock Ticker"
        allowTransparency="true"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default LiveTicker;

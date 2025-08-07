create database stock_portfolio;
use stock_portfolio;

CREATE TABLE market_stocks (
    stock_id INT PRIMARY KEY,
    stock_symbol VARCHAR(10) NOT NULL UNIQUE,
    company_name VARCHAR(100) NOT NULL,
    available_quantity INT NOT NULL,
    price_per_unit DECIMAL(10, 2) NOT NULL,
    sector VARCHAR(50) NOT NULL
);

select * from market_stocks;

INSERT INTO market_stocks (stock_id, stock_symbol, company_name, available_quantity, price_per_unit, sector)
VALUES
(1, 'AAPL', 'Apple Inc.', 1000, 189.44, 'Technology'),
(2, 'GOOGL', 'Alphabet Inc.', 800, 2789.62, 'Technology'),
(3, 'TSLA', 'Tesla Inc.', 600, 715.50, 'Automobile'),
(4, 'AMZN', 'Amazon.com Inc.', 700, 133.12, 'E-Commerce'),
(5, 'HDFC', 'HDFC Bank Ltd.', 1200, 1645.30, 'Finance'),
(6, 'INFY', 'Infosys Ltd.', 1500, 1390.75, 'Information Technology'),
(7, 'RELI', 'Reliance Industries', 1100, 2450.90, 'Energy'),
(8, 'TATA', 'Tata Motors Ltd.', 950, 820.60, 'Automobile');


select * from market_stocks;



CREATE TABLE transaction_log (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    stock_symbol VARCHAR(10) NOT NULL,
    transaction_type ENUM('BUY', 'SELL') NOT NULL,
    quantity INT NOT NULL,
    price_per_unit DECIMAL(10, 2) NOT NULL,
    total_value DECIMAL(15, 2) GENERATED ALWAYS AS (quantity * price_per_unit) STORED,
    transaction_date DATE NOT NULL DEFAULT (CURRENT_DATE)
);

select * from transaction_log;


CREATE TABLE user_portfolio (
    stock_symbol VARCHAR(10) PRIMARY KEY,
    quantity INT NOT NULL
);




select * from user_portfolio;







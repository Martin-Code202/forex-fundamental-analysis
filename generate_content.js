// Generator script — run with: node generate_content.js
// Creates js/content.js with all chapter data
const fs = require('fs');

function t(s) { return '`' + s + '`'; }

const chapters = [];

// CH1
chapters.push({
    id: 1, title: "The Fundamental Analyst Mindset", icon: "🧠",
    description: "Why fundamental analysis matters, how to think like an institutional trader, and the concept of fair value.",
    sections: [
        {
            title: "Why Fundamental Analysis Matters", content: `
<p>Fundamental analysis (FA) represents the bedrock of professional currency trading. It provides a systematic methodology for evaluating the intrinsic value of national currencies by examining the underlying economic, social, and political forces that drive global capital flows.</p>
<p><strong>FA drives long-term price movements.</strong> While technical analysis (TA) explains short-term noise and entry/exit timing, the underlying reason a currency trends over weeks and months is almost always macroeconomic.</p>
<div class="table-wrapper"><table><thead><tr><th>Time Horizon</th><th>Primary Driver</th></tr></thead><tbody><tr><td>Short-term moves</td><td>Fear &amp; Greed (sentiment, news reactions, technical levels)</td></tr><tr><td>Long-term trends</td><td>Fundamentals (interest rates, growth, inflation, trade flows)</td></tr></tbody></table></div>
<div class="insight-card"><div class="insight-label">Pro Insight</div><p>The typical retail trader watches 15-minute candlestick charts and wonders why their patterns keep failing. The answer is <strong>context</strong>. If the macro environment is bearish on a currency, no bullish engulfing candle will save you. FA gives you the context that makes TA work.</p></div>
<p>The core objective is the determination of <strong>"fair value"</strong> — the price at which a currency pair should theoretically trade when all known economic factors are considered. While short-term speculative fervor may cause prices to diverge from this fair value, fundamentalists maintain that market forces will eventually force a correction toward the economic mean.</p>` },
        {
            title: "Think Like an Institutional Trader", content: `
<ul><li><strong>Long-term outlook:</strong> Think in days, weeks, and months — not minutes.</li><li><strong>Investor mindset:</strong> Ask 'why is capital flowing to/from this currency?' not 'where is the next resistance?'</li><li><strong>Media literacy:</strong> Watch Bloomberg and CNBC not to trade the news, but to understand the <em>narrative</em> driving markets.</li><li><strong>Pattern recognition over time:</strong> Reading financial news feels confusing at first. Consistency compounds — daily exposure builds intuition over months.</li></ul>
<div class="analogy-card"><div class="analogy-label">Beginner Analogy — Currency as a Share of Stock</div><p>Think of a country like a giant company and its currency like a share of stock. GDP is like "quarterly earnings." Interest rates are like a "dividend" — the reward for holding the stock. If a country pays a higher interest rate, more people will want to own its currency.</p></div>
<h3>Recommended News Resources</h3><ul><li><strong>Bloomberg TV / Bloomberg.com</strong> — central bank speeches, macro analysis</li><li><strong>CNBC</strong> — market sentiment and breaking economic data</li><li><strong>Financial Times (FT.com)</strong> — deep macro journalism</li><li><strong>ForexLive.com</strong> — real-time forex-specific economic commentary</li></ul>` }
    ],
    quiz: [
        { question: "What primarily drives long-term currency price trends?", options: ["Technical chart patterns", "Fundamentals (interest rates, growth, inflation)", "Social media sentiment", "Random market noise"], correct: 1, explanation: "Long-term currency trends are driven by macroeconomic fundamentals — interest rates, economic growth, inflation, and trade flows." },
        { question: "What is 'fair value' in fundamental analysis?", options: ["The lowest price ever traded", "The price based on all known economic factors", "The price set by central banks", "The average of the last 50 candlesticks"], correct: 1, explanation: "Fair value is the theoretical price based on all known economic factors." },
        { question: "In the Currency as Stock analogy, what do interest rates represent?", options: ["The stock price", "The company's debt", "A dividend paid for holding the currency", "Market volatility"], correct: 2, explanation: "Interest rates work like dividends — they reward you for holding a currency." }
    ]
});

// CH2
chapters.push({
    id: 2, title: "Reading Economic Data Like a Pro", icon: "📊",
    description: "Master the three-layer framework for analyzing economic releases, understand the expectations effect, and learn why 'good news' can sometimes be bearish.",
    sections: [
        {
            title: "The Three-Layer Framework", content: `
<p>When any economic number is released, analyse it through three lenses simultaneously:</p>
<div class="table-wrapper"><table><thead><tr><th>Layer</th><th>What to Assess &amp; Why</th></tr></thead><tbody><tr><td><strong>1. Absolute Value</strong></td><td>Is the number positive or negative? Simple but necessary context.</td></tr><tr><td><strong>2. Delta (% Change)</strong></td><td>The change relative to previous period. More important than the absolute figure.</td></tr><tr><td><strong>3. Trend (6–12 months)</strong></td><td>Uptrend, downtrend, or sideways? Central banks react to trends, not one-off prints.</td></tr><tr><td><strong>4. vs. Expectations</strong></td><td>Did it beat or miss consensus? Markets price in expectations.</td></tr></tbody></table></div>` },
        {
            title: "The Expectations Effect", content: `
<p>If employment data comes in at +150,000 jobs (positive) but expectations were +200,000 (missed), the currency will <strong>fall</strong>. The market trades the delta vs. what it expected.</p>
<div class="table-wrapper"><table><thead><tr><th>Scenario</th><th>Currency Reaction</th></tr></thead><tbody><tr><td>Data <strong>BEATS</strong> expectations</td><td>Currency likely <strong>RISES</strong></td></tr><tr><td>Data <strong>MEETS</strong> expectations</td><td>Minimal reaction (already priced in)</td></tr><tr><td>Data <strong>MISSES</strong> expectations</td><td>Currency likely <strong>FALLS</strong></td></tr></tbody></table></div>
<div class="insight-card"><div class="insight-label">Pro Insight</div><p>Markets are forward-looking; they price in expected news <strong>long before</strong> it is released. A trading opportunity arises only when the forecast is wrong or the data is an extreme outlier.</p></div>` },
        {
            title: "Buy the Rumor, Sell the Fact", content: `
<p>Prices rise in anticipation of positive news and then fall once confirmed. Early buyers take profits by selling to late-comers.</p>
<div class="analogy-card"><div class="analogy-label">Beginner Analogy — The Smartphone Launch</div><p>People get excited weeks before a new smartphone. The company's stock rises. By the time the phone is in stores, everyone who wanted it has bought. Some early buyers sell to lock in profits. Even though the phone is a success, the stock might <strong>drop</strong>. In forex, this is why a currency sometimes falls after a "good" rate hike.</p></div>` },
        {
            title: "Why Context Determines Whether Data Matters", content: `
<p>Whether a data point matters depends on:</p><ul><li><strong>Business Cycle Stage:</strong> During late expansion, inflation data dominates. During recession, unemployment dominates.</li><li><strong>Historical reliability</strong></li><li><strong>Revision count:</strong> GDP advance report moves markets most — even though it's least accurate.</li><li><strong>Economic size/power:</strong> US NFP moves global markets.</li><li><strong>Timeliness:</strong> Earlier data = more market-moving.</li></ul>
<h3>Fair Value &amp; Value Areas</h3><p>A sideways market is a "Value Area" where buyers and sellers agree on fair value. When a fundamental shift occurs, price breaks out and trends to seek new fair value.</p>` }
    ],
    quiz: [
        { question: "Employment data: +150K jobs. Expectations: +200K. What happens?", options: ["Rises — job growth is positive", "Falls — data missed expectations", "Nothing — market ignores employment", "Depends on time of day"], correct: 1, explanation: "Even though positive, it missed expectations. Markets trade delta vs. expectations." },
        { question: "In the Three-Layer Framework, which layers usually matter most?", options: ["Absolute Value", "Delta (% Change)", "Trend (6-12 months)", "Delta and Trend usually matter more"], correct: 3, explanation: "Delta (rate of change) and trend are typically more important than absolute value." },
        { question: "'Buy the Rumor, Sell the Fact' means:", options: ["Always buy on news releases", "Prices often rise in anticipation and fall when confirmed", "Rumors are more reliable than facts", "Only trade confirmed news"], correct: 1, explanation: "Markets price in anticipated events beforehand. When confirmed, early buyers take profits." }
    ]
});

// CH3
chapters.push({
    id: 3, title: "The Business Cycle — Your North Star", icon: "🔄",
    description: "Understand the economic cycle that determines which data matters, how central banks respond, and a real-world case study.",
    sections: [
        {
            title: "Why the Business Cycle Is the Foundation", content: `
<p>Every data point must be interpreted through the lens of <strong>where we are in the business cycle</strong>.</p>
<div class="table-wrapper"><table><thead><tr><th>Cycle Phase</th><th>Traders Focus On</th><th>Monetary Policy</th></tr></thead><tbody>
<tr><td><strong>Early Expansion</strong></td><td>GDP growth, PMI rising, employment improving. Risk currencies (AUD, NZD) rally.</td><td>Rates kept low</td></tr>
<tr><td><strong>Late Expansion</strong></td><td>Inflation (core CPI) becomes main focus. Markets anticipate rate hikes.</td><td>Considering raising rates</td></tr>
<tr><td><strong>Peak</strong></td><td>Overheating. Yield curves flatten or invert. Risk assets wobble.</td><td>Aggressive rate hikes</td></tr>
<tr><td><strong>Contraction</strong></td><td>Unemployment data takes centre stage. Safe haven flows dominate.</td><td>Aggressive rate cuts, QE</td></tr>
<tr><td><strong>Trough / Recovery</strong></td><td>Stimulus kicks in. Watch PMI, retail sales for green shoots.</td><td>Rates kept low</td></tr>
</tbody></table></div>
<p>A recession = <strong>two consecutive quarters of negative GDP growth</strong>.</p>` },
        {
            title: "Which Data Is 'In Vogue'?", content: `
<p>In <strong>late expansion</strong>: Nobody cares about unemployment. Everyone obsesses over CPI.</p>
<p>In <strong>recession</strong>: Nobody cares about inflation. Everyone watches jobless claims and GDP.</p>
<div class="insight-card"><div class="insight-label">Pro Insight — Trade the Narrative</div><p>Before trading any release, ask: <strong>"Does the market currently CARE about this data?"</strong> Trade the narrative, not just the number.</p></div>` },
        {
            title: "The Interest Rate Cycle", content: `
<p>The cycle transitions through three core phases:</p><ul><li><strong>Hold Phase (Neutral):</strong> Inflation near target, growth steady. Currency ranges.</li><li><strong>Hike Phase (Hawkish):</strong> Rising inflation, rate increases. Currency appreciates.</li><li><strong>Cut Phase (Dovish):</strong> Contraction anticipated, rates cut. Currency depreciates.</li></ul>` },
        {
            title: "Case Study: 2015 USD/CAD Divergence", content: `
<p>The BoC cut rates twice due to collapsing oil prices while the Fed was signalling rate hikes. This <strong>divergence</strong> drove a massive USD/CAD uptrend.</p>
<div class="insight-card"><div class="insight-label">Pro Insight — Divergence Trading</div><p>The most powerful forex trends come from <strong>divergence</strong> — one economy accelerating while another slows. Find the divergence, trade the trend.</p></div>` }
    ],
    quiz: [
        { question: "During late expansion, which data does the market focus on?", options: ["Unemployment", "Inflation (CPI)", "Retail sales", "Building permits"], correct: 1, explanation: "During late expansion, unemployment is low so nobody cares. The market obsesses over CPI and when the central bank will hike." },
        { question: "A recession is formally defined as:", options: ["One quarter of slow growth", "Two consecutive quarters of negative GDP growth", "Rising unemployment for 6 months", "A stock market crash >20%"], correct: 1, explanation: "Two consecutive quarters of negative GDP growth." },
        { question: "In 2015, why did USD/CAD rise sharply?", options: ["Both banks cutting rates", "Fed hiking while BoC cutting — divergence", "Oil prices rising", "Canada had higher GDP"], correct: 1, explanation: "The Fed was moving toward hikes (USD strength) while the BoC was cutting (CAD weakness). Classic divergence." },
        { question: "What should you ask BEFORE trading any economic release?", options: ["What time does market close?", "Does the market currently CARE about this data?", "How many pips last time?", "What does my indicator say?"], correct: 1, explanation: "The market's focus changes with the business cycle." }
    ]
});

// CH4
chapters.push({
    id: 4, title: "Inflation — The Silent Force", icon: "🔥",
    description: "Master inflation types, real vs. nominal rates (Fisher Equation), and how central banks respond to rising prices.",
    sections: [
        {
            title: "Types of Inflation", content: `
<div class="table-wrapper"><table><thead><tr><th>Type</th><th>Definition &amp; Significance</th></tr></thead><tbody>
<tr><td><strong>Headline CPI</strong></td><td>Overall Consumer Price Index. Includes food and energy — highly volatile.</td></tr>
<tr><td><strong>Core CPI</strong></td><td>Strips out food and energy. Fed's preferred measure. More stable and predictive.</td></tr>
<tr><td><strong>PPI</strong></td><td>Producer Price Index. Leading indicator of CPI — rising producer costs flow to consumers.</td></tr>
<tr><td><strong>Deflation</strong></td><td>Falling prices. Economically dangerous: consumers delay purchases, stagnation follows.</td></tr>
<tr><td><strong>Stagflation</strong></td><td>High inflation + high unemployment. Near-impossible to fix.</td></tr>
<tr><td><strong>Hyperinflation</strong></td><td>Runaway inflation (Zimbabwe, Weimar Germany). Destroys currency value.</td></tr>
<tr><td><strong>Disinflation</strong></td><td>Inflation positive but slowing. Economy still growing but cooling.</td></tr>
</tbody></table></div>
<div class="analogy-card"><div class="analogy-label">Beginner Analogy — The Grocery Basket</div><p>Inflation is like noticing the same bag of chips costs $2.50 instead of $2. Your money buys less. Central banks want to make sure your $2 buys roughly the same amount next year.</p></div>` },
        {
            title: "Real vs. Nominal Rates — The Fisher Equation", content: `
<div class="formula-box"><div class="formula-label">Fisher Equation</div>Real Interest Rate = Nominal Rate − Expected Inflation</div>
<p>If a country offers 5% rates but has 6% inflation, real rate is <strong>-1%</strong> — investors lose value. Currencies with high <em>real</em> rates appreciate most.</p>
<div class="insight-card"><div class="insight-label">Pro Insight</div><p>Most major central banks target approximately <strong>2% inflation per year</strong>. Below 2% suggests stagnation risk (cut rates). Above 2% means the bank will hike to cool demand.</p></div>` },
        {
            title: "How Central Banks Respond to Inflation", content: `
<ul><li><strong>Raise interest rates:</strong> Increases borrowing cost, reduces spending, cools inflation.</li><li><strong>Increase reserve requirements:</strong> Banks hold more, less lending.</li><li><strong>Open market operations:</strong> Sell bonds to drain liquidity.</li><li><strong>Fiscal policy:</strong> Raise taxes, cut spending.</li><li><strong>Supply-side policies:</strong> Invest in productivity and technology.</li></ul>
<div class="table-wrapper"><table><thead><tr><th>Scenario</th><th>Currency Impact</th></tr></thead><tbody>
<tr><td>Rising inflation → likely RAISE rates</td><td>Currency <strong>APPRECIATES</strong></td></tr>
<tr><td>Falling inflation → likely CUT rates</td><td>Currency <strong>DEPRECIATES</strong></td></tr>
<tr><td>Inflation destroys purchasing power</td><td>Foreign investors AVOID → <strong>DEPRECIATES</strong></td></tr>
</tbody></table></div>
<div class="insight-card"><div class="insight-label">Pro Insight</div><p>Moderate inflation with rate hike expectations is bullish. Runaway inflation that destroys confidence is bearish — even if rates are rising.</p></div>` }
    ],
    quiz: [
        { question: "What is 'Core CPI' and why is it preferred?", options: ["Total inflation — full picture", "CPI excluding food and energy — more stable", "Core industries only", "CPI adjusted for GDP"], correct: 1, explanation: "Core CPI strips out volatile food and energy. More stable and predictive." },
        { question: "5% interest rate, 6% inflation. Real rate?", options: ["+11%", "+1%", "-1%", "0%"], correct: 2, explanation: "Fisher Equation: 5% − 6% = -1%. Investors lose purchasing power." },
        { question: "What is stagflation?", options: ["Low inflation + high growth", "High inflation + high unemployment", "Falling prices + rising GDP", "Moderate everything"], correct: 1, explanation: "High inflation + high unemployment. Nearly impossible to fix." }
    ]
});

// CH5
chapters.push({
    id: 5, title: "Employment & The Labor Market", icon: "👷",
    description: "Dive into Nonfarm Payrolls, unemployment metrics, and why employment data is both politically sensitive and a lagging indicator.",
    sections: [
        {
            title: "Key Employment Metrics", content: `
<ul><li><strong>Nonfarm Payrolls (NFP):</strong> Monthly US jobs report. First Friday of each month — highest market-moving impact.</li><li><strong>Unemployment Rate:</strong> Percentage of active labour force jobless. <em>Caveat:</em> discouraged workers are EXCLUDED — understates true unemployment.</li><li><strong>Part-Time Employment:</strong> Rising part-time work can be an early recession warning.</li><li><strong>Jobless Claims (Weekly):</strong> High-frequency, real-time indicator. One of the best leading indicators.</li></ul>` },
        {
            title: "Why Employment Is Political", content: `
<p>Employment data is politically sensitive. Governments face electoral consequences when unemployment rises.</p>
<ul><li><strong>Data manipulation:</strong> Governments can influence how labour statistics are computed. Consider political environment.</li><li><strong>Lagging nature:</strong> NFP is a <strong>lagging indicator</strong>. Use leading indicators (PMI, jobless claims) to anticipate moves.</li></ul>
<div class="insight-card"><div class="insight-label">Pro Insight — Don't Trade NFP Blindly</div><p>The knee-jerk reaction often <strong>reverses within hours</strong>. Wait for revision context, average hourly earnings data, and participation rate — then trade the sustained move. Average Hourly Earnings is increasingly watched as a proxy for <strong>wage-driven inflation</strong>.</p></div>` }
    ],
    quiz: [
        { question: "When is NFP released?", options: ["Last day of month", "First Friday of each month", "Every Wednesday", "Quarterly"], correct: 1, explanation: "First Friday — timeliness and scope make it highest-impact regular US data." },
        { question: "Why might unemployment rate understate true unemployment?", options: ["Includes children", "Excludes discouraged workers who stopped looking", "Only counts full-time", "Calculated yearly"], correct: 1, explanation: "Discouraged workers are excluded, making the rate appear lower." },
        { question: "What NFP component matters most in high-inflation environments?", options: ["Total jobs", "Average Hourly Earnings (wage inflation)", "Part-time numbers", "Government sector"], correct: 1, explanation: "Average Hourly Earnings is a proxy for wage-driven inflation." }
    ]
});

// CH6
chapters.push({
    id: 6, title: "GDP — Measuring Economic Health", icon: "📈",
    description: "Understand GDP types, the GDP formula, what drives each component, and limitations.",
    sections: [
        {
            title: "Understanding GDP", content: `
<p>GDP measures the total market value of all final goods and services produced within a country's borders. The broadest measure of economic health.</p>
<div class="table-wrapper"><table><thead><tr><th>GDP Type</th><th>Description</th></tr></thead><tbody>
<tr><td><strong>Nominal GDP</strong></td><td>Raw output times current prices. Can be misleading in inflation.</td></tr>
<tr><td><strong>Real GDP</strong></td><td>Output times base-year prices. Removes inflation. The true measure.</td></tr>
<tr><td><strong>GDP Per Capita</strong></td><td>GDP divided by population. Better for cross-country comparisons.</td></tr>
<tr><td><strong>Debt-to-GDP</strong></td><td>Government debt relative to GDP. High ratio signals fiscal stress.</td></tr>
</tbody></table></div>` },
        {
            title: "The GDP Formula", content: `
<div class="formula-box"><div class="formula-label">GDP Formula</div>GDP = Consumption (C) + Investment (I) + Government Spending (G) + Net Exports (X − M)</div>
<ul><li><strong>Consumption (C):</strong> Consumer spending. ~70% of US GDP. Driven by employment, wages, confidence.</li><li><strong>Investment (I):</strong> Business spending on equipment, R&amp;D. Indicator of forward-looking growth.</li><li><strong>Government Spending (G):</strong> Fiscal stimulus injects directly into GDP.</li><li><strong>Net Exports (X − M):</strong> Surplus adds; deficit subtracts. Strong currency hurts exports.</li></ul>` },
        {
            title: "GDP Limitations &amp; Release Schedule", content: `
<h3>What GDP Doesn't Capture</h3><ul><li>Underground/informal economy</li><li>Self-produced goods and services</li><li>Second-hand market transactions</li><li>Inequality — high GDP can mask poverty</li></ul>
<div class="insight-card"><div class="insight-label">Pro Insight — GDP Release Schedule</div><p><strong>Advance GDP</strong> (~1 month after quarter) → Biggest market move<br><strong>Preliminary GDP</strong> (1 month later) → Moderate if significant revision<br><strong>Final GDP</strong> (another month) → Often ignored<br><strong>Trade the advance report.</strong></p></div>` }
    ],
    quiz: [
        { question: "Nominal vs. Real GDP?", options: ["Nominal includes gov spending, Real doesn't", "Nominal includes inflation effects, Real removes them", "Real is always higher", "No practical difference"], correct: 1, explanation: "Nominal uses current prices, Real uses constant base-year prices." },
        { question: "Largest component of US GDP?", options: ["Government Spending (~40%)", "Consumer Spending (~70%)", "Net Exports (~30%)", "Business Investment (~50%)"], correct: 1, explanation: "Consumer spending is ~70% of US GDP." },
        { question: "Which GDP release moves markets most?", options: ["Preliminary", "Final", "Advance", "Per Capita"], correct: 2, explanation: "Advance GDP — it comes first. Final GDP is often ignored." }
    ]
});

// CH7
chapters.push({
    id: 7, title: "Trade Balance & Capital Flows", icon: "⚖️",
    description: "How trade surpluses/deficits affect currencies, current vs. capital accounts, and the USD's 'exorbitant privilege.'",
    sections: [
        {
            title: "Trade Surplus vs. Deficit", content: `
<div class="formula-box"><div class="formula-label">Trade Balance</div>Trade Balance = Exports − Imports</div>
<div class="table-wrapper"><table><thead><tr><th>Position</th><th>Implication</th></tr></thead><tbody>
<tr><td><strong>Trade Surplus (X &gt; M)</strong></td><td>More money flows IN. Generally currency-positive.</td></tr>
<tr><td><strong>Trade Deficit (X &lt; M)</strong></td><td>More money flows OUT. Generally currency-negative, but US defies this via capital inflows.</td></tr>
</tbody></table></div>` },
        {
            title: "Current Account vs. Capital Account", content: `
<ul><li><strong>Current Account:</strong> Trade in goods and services.</li><li><strong>Capital Account:</strong> Flow of investments, stocks, bonds, FDI. A country can run a trade deficit but attract enough investment capital to keep its currency strong (see: USA).</li></ul>
<div class="insight-card"><div class="insight-label">Pro Insight — Why the US Can Run Deficits</div><p>The US current account deficit is offset by <strong>massive capital inflows</strong>. Foreign investors buy Treasuries, equities, and real estate — all requiring USD. This is the <strong>"exorbitant privilege"</strong> of being the reserve currency issuer.</p></div>` }
    ],
    quiz: [
        { question: "Exports $500B, Imports $600B. Trade balance?", options: ["$100B surplus", "$600B deficit", "-$100B deficit", "$1,100B total"], correct: 2, explanation: "$500B − $600B = -$100B deficit." },
        { question: "Why does USD stay strong despite trade deficits?", options: ["US doesn't run deficits", "Capital account inflows offset the deficit", "Government manipulates rates", "Deficits always strengthen currency"], correct: 1, explanation: "Capital inflows from foreign investors buying US assets offset the trade deficit." }
    ]
});

// CH8
chapters.push({
    id: 8, title: "Central Banks — The Market Movers", icon: "🏦",
    description: "How central banks control currencies through interest rates, QE/QT, and forward guidance. Decode hawkish vs. dovish language.",
    sections: [
        {
            title: "The Role of Central Banks", content: `
<p>Central banks are the most powerful actors in currency markets.</p>
<div class="table-wrapper"><table><thead><tr><th>Central Bank</th><th>Country/Region</th></tr></thead><tbody>
<tr><td><strong>Federal Reserve (Fed)</strong></td><td>United States</td></tr>
<tr><td><strong>ECB</strong></td><td>Eurozone (20 countries)</td></tr>
<tr><td><strong>BoJ</strong></td><td>Japan</td></tr>
<tr><td><strong>BoE</strong></td><td>United Kingdom</td></tr>
<tr><td><strong>RBA</strong></td><td>Australia</td></tr>
<tr><td><strong>SNB</strong></td><td>Switzerland</td></tr>
<tr><td><strong>PBoC</strong></td><td>China</td></tr>
</tbody></table></div>
<div class="analogy-card"><div class="analogy-label">Beginner Analogy — The Thermostat</div><p>The economy is like a house. The central bank controls the thermostat. Too cold (recession)? Turn on the furnace (lower rates). Too hot (inflation)? Turn on the AC (raise rates).</p></div>` },
        {
            title: "Monetary Policy Tools", content: `
<h3>Interest Rates — The Primary Tool</h3><p>Raising rates → appreciation. Cutting rates → depreciation.</p>
<h4>Fed Funds Rate vs. Discount Rate</h4><ul><li><strong>Fed Funds Rate:</strong> Rate banks lend reserves overnight. The benchmark.</li><li><strong>Discount Rate:</strong> Rate Fed lends directly to banks. Always higher — Fed wants banks to lend to each other first.</li></ul>
<h3>Open Market Operations</h3><ul><li><strong>Buying bonds (QE):</strong> Injects cash → money supply up → rates fall → currency weakens.</li><li><strong>Selling bonds (QT):</strong> Drains cash → money supply down → rates rise → currency strengthens.</li></ul>` },
        {
            title: "QE &amp; QT", content: `
<p>When rates are near zero (liquidity trap), central banks use QE:</p>
<ul><li><strong>Yield Compression:</strong> Buying bonds pushes their price up and yields down.</li><li><strong>Portfolio Rebalancing:</strong> Banks invest excess cash in riskier assets.</li><li><strong>Currency Impact:</strong> QE is <strong>bearish</strong> — increases money supply.</li></ul>
<p><strong>QT</strong> is the reverse — removing liquidity. <strong>Bullish</strong> for currency.</p>` },
        {
            title: "Hawkish vs. Dovish", content: `
<div class="table-wrapper"><table><thead><tr><th>Stance</th><th>Meaning &amp; Impact</th></tr></thead><tbody>
<tr><td><strong>Hawkish</strong></td><td>Biased toward raising rates. Currency BULLISH.</td></tr>
<tr><td><strong>Dovish</strong></td><td>Biased toward cutting rates. Currency BEARISH.</td></tr>
<tr><td><strong>Neutral</strong></td><td>Data-dependent. Impact depends on incoming data.</td></tr>
</tbody></table></div>
<div class="insight-card"><div class="insight-label">Pro Insight — Trade the Shift</div><p>A hawkish bank turning dovish = massive SHORT opportunity. A dovish bank showing hawkish hints = massive LONG opportunity. The biggest moves come from <strong>PIVOTS</strong>.</p></div>` },
        {
            title: "Fed Funds Futures", content: `
<div class="formula-box"><div class="formula-label">Fed Funds Futures</div>Contract Price = 100 − Expected Fed Funds Rate</div>
<ul><li>Rate at 5% → futures at ~95.00</li><li>Expect a CUT → BUY futures (price rises)</li><li>Expect a HIKE → SELL futures (price falls)</li></ul>
<p><strong>CME FedWatch Tool:</strong> Free tool converting futures prices into probability percentages for each FOMC meeting.</p>` }
    ],
    quiz: [
        { question: "In the Thermostat analogy, 'air conditioning' represents:", options: ["Cutting rates", "Raising rates to cool inflation", "Printing money", "Lowering taxes"], correct: 1, explanation: "Raising rates cools the overheating economy." },
        { question: "QE is generally what for a currency?", options: ["Bullish", "Bearish — increases money supply", "Neutral", "Depends on stocks"], correct: 1, explanation: "QE increases money supply and lowers yields — bearish." },
        { question: "Why are central bank PIVOTS so important?", options: ["Announced on TV", "Current stance is priced in; pivots are unexpected change", "Affect stocks more", "Stance changes daily"], correct: 1, explanation: "The current stance is priced in. Pivots cause repricing." },
        { question: "Fed rate at 5%, traders expect a cut. Futures price?", options: ["Falls below 95", "Stays at 95", "Rises above 95", "Halts"], correct: 2, explanation: "Price = 100 − Expected Rate. If rate expected lower, price rises above 95." }
    ]
});

// CH9
chapters.push({
    id: 9, title: "Fiscal Policy & Government Action", icon: "🏛️",
    description: "Compare fiscal and monetary policy, how governments fund spending, and why bond markets matter.",
    sections: [
        {
            title: "Fiscal vs. Monetary Policy", content: `
<div class="table-wrapper"><table><thead><tr><th>Factor</th><th>Monetary</th><th>Fiscal</th></tr></thead><tbody>
<tr><td><strong>Controlled by</strong></td><td>Central Bank</td><td>Government</td></tr>
<tr><td><strong>Tools</strong></td><td>Interest rates, OMO, QE/QT</td><td>Tax rates, gov spending</td></tr>
<tr><td><strong>Expansionary</strong></td><td>Cut rates, buy bonds</td><td>Cut taxes, increase spending</td></tr>
<tr><td><strong>Speed</strong></td><td>Fast (immediate rate decisions)</td><td>Slow (legislative process)</td></tr>
<tr><td><strong>Currency Impact</strong></td><td>Direct and immediate</td><td>Indirect and gradual</td></tr>
</tbody></table></div>` },
        {
            title: "How Governments Fund Spending", content: `
<ul><li><strong>Tax revenue:</strong> Income, corporate, VAT/sales tax.</li><li><strong>Government bonds:</strong> T-bills, T-notes, T-bonds bought by investors, creating capital inflows.</li><li><strong>Foreign grants/aid:</strong> Minor in developed economies.</li><li><strong>Reserve drawdowns:</strong> Using saved FX reserves.</li></ul>
<div class="insight-card"><div class="insight-label">Pro Insight — Bonds and Currency</div><p>Higher bond yields → higher rates → currency appreciates (capital inflows). But massive debt issuance can signal fiscal instability → depreciates. Credit ratings matter.</p></div>` }
    ],
    quiz: [
        { question: "Which is faster: fiscal or monetary policy?", options: ["Fiscal", "Monetary — rate decisions are immediate", "Both equal", "Neither is quick"], correct: 1, explanation: "Monetary policy is faster — rate changes take effect immediately." },
        { question: "How does higher bond issuance affect currency?", options: ["Always positive", "Depends: yields attract capital but too much debt signals instability", "Always negative", "No relationship"], correct: 1, explanation: "Double-edged sword: yields attract capital, but excessive debt can signal instability." }
    ]
});

// CH10
chapters.push({
    id: 10, title: "Currency Profiles & The Dollar Index", icon: "💱",
    description: "Deep-dive into major currencies, commodity currencies, the DXY, and the PMI indicator.",
    sections: [
        {
            title: "Universal Currency Drivers", content: `
<ul><li><strong>Interest rate differential</strong> — #1 driver</li><li><strong>Growth differential</strong></li><li><strong>Inflation differential</strong></li><li><strong>Political/economic stability</strong></li><li><strong>Current account position</strong></li><li><strong>Central bank credibility</strong></li><li><strong>Reserve currency status</strong></li><li><strong>Risk sentiment</strong></li></ul>` },
        {
            title: "USD — The Reserve Currency", content: `
<ul><li>~60% of global FX reserves in USD</li><li>Commodities priced in USD</li><li>Most liquid currency</li><li><strong>Safe haven</strong> during crises</li></ul>
<h3>Dollar Smile Theory</h3><p>USD strengthens in TWO scenarios: <strong>Risk-off</strong> (safe haven) and <strong>Strong US growth</strong> (rate hikes). USD weakens in the middle — moderate global growth.</p>` },
        {
            title: "The US Dollar Index (DXY)", content: `
<div class="table-wrapper"><table><thead><tr><th>Currency</th><th>Weight (%)</th></tr></thead><tbody>
<tr><td><strong>EUR</strong></td><td>57.6%</td></tr>
<tr><td><strong>JPY</strong></td><td>13.6%</td></tr>
<tr><td><strong>GBP</strong></td><td>11.9%</td></tr>
<tr><td><strong>CAD</strong></td><td>9.1%</td></tr>
<tr><td><strong>SEK</strong></td><td>4.2%</td></tr>
<tr><td><strong>CHF</strong></td><td>3.6%</td></tr>
</tbody></table></div>
<p>EUR is 57.6% — strong <strong>inverse correlation</strong> between EUR/USD and DXY. Rising DXY puts downward pressure on commodities.</p>` },
        {
            title: "EUR, JPY &amp; Commodity Currencies", content: `
<h3>EUR</h3><ul><li>20 countries — ECB's job is complex</li><li>Second largest reserve currency</li><li>German data (PMI, ZEW) moves EUR most</li></ul>
<div class="insight-card"><div class="insight-label">Pro Insight — ECB Complexity</div><p>The ECB sets one rate for <strong>20 very different economies</strong>. Watch for 'fragmentation' risk — widening spreads between German bunds and Italian BTPs.</p></div>
<h3>JPY</h3><ul><li>Third most traded. Safe haven.</li><li>Ultra-low rates — primary carry trade funding currency.</li></ul>
<h3>Commodity Currencies</h3>
<div class="table-wrapper"><table><thead><tr><th>Currency</th><th>Key Driver</th></tr></thead><tbody>
<tr><td><strong>AUD</strong></td><td>Iron ore, coal, gold. Proxy for Chinese economic health.</td></tr>
<tr><td><strong>CAD</strong></td><td>Oil (WTI crude). Oil up → CAD up.</td></tr>
<tr><td><strong>NZD</strong></td><td>Dairy, agricultural commodities.</td></tr>
</tbody></table></div>` },
        {
            title: "PMI — The Timely Leading Indicator", content: `
<ul><li><strong>Manufacturing PMI:</strong> Above 50 = expansion; below 50 = contraction.</li><li><strong>Services PMI:</strong> 60-80% of developed economy GDP.</li><li><strong>Composite PMI:</strong> Real-time snapshot of overall conditions.</li></ul>
<div class="insight-card"><div class="insight-label">Pro Insight</div><p>PMI is a <strong>leading indicator</strong> — early in the month, forward-looking. A PMI crossing 50 is a <strong>significant trend change signal</strong>. Arguably more useful than GDP for short-to-medium-term trading.</p></div>` }
    ],
    quiz: [
        { question: "What is the Dollar Smile Theory?", options: ["USD always trends up", "USD strengthens in risk-off AND strong growth, weakens in moderate conditions", "USD and EUR move together", "USD always depreciates"], correct: 1, explanation: "USD strengthens at both extremes (panic and strong growth), weakens in the middle." },
        { question: "Which currency dominates DXY at 57.6%?", options: ["JPY", "GBP", "EUR", "CAD"], correct: 2, explanation: "EUR has 57.6% weighting — hence strong EUR/USD-DXY inverse correlation." },
        { question: "PMI of 48.5 indicates:", options: ["Strong expansion", "Contraction (below 50)", "Normal growth", "Hyperinflation"], correct: 1, explanation: "Below 50 = contraction." }
    ]
});

// CH11
chapters.push({
    id: 11, title: "Risk Sentiment & Market Psychology", icon: "🎭",
    description: "Risk-On/Risk-Off framework, carry trades, the COT Report, ad hoc events, and sentiment.",
    sections: [
        {
            title: "Risk-On vs. Risk-Off", content: `
<div class="table-wrapper"><table><thead><tr><th>Factor</th><th>Risk-ON</th><th>Risk-OFF</th></tr></thead><tbody>
<tr><td><strong>Equities</strong></td><td>Rising</td><td>Falling</td></tr>
<tr><td><strong>High-yield FX</strong></td><td>AUD, NZD UP</td><td>AUD, NZD DOWN</td></tr>
<tr><td><strong>Safe-haven FX</strong></td><td>JPY, CHF weaker</td><td>JPY, CHF stronger</td></tr>
<tr><td><strong>Gold</strong></td><td>Neutral</td><td>Strongly UP</td></tr>
<tr><td><strong>VIX</strong></td><td>Low (&lt;15)</td><td>High (&gt;30)</td></tr>
</tbody></table></div>
<div class="analogy-card"><div class="analogy-label">Beginner Analogy — The Party Mood</div><p><strong>Risk-On</strong> = music is great, everyone's having fun, trying new things. <strong>Risk-Off</strong> = music stops, everyone nervous and heading for the exit.</p></div>` },
        {
            title: "Carry Trades", content: `
<div class="formula-box"><div class="formula-label">Carry Trade Profit</div>Profit = Interest Earned (Target) − Interest Paid (Funding)</div>
<p>Example: Borrow JPY at 0.1% → Buy AUD at 4.1% → Profit ~4.0%/year.</p>
<div class="analogy-card"><div class="analogy-label">Beginner Analogy — The Middleman</div><p>Borrow $1,000 at 1% interest, lend it at 5%. Keep the 4% difference. That is a carry trade.</p></div>
<p><strong>Unwind Risk:</strong> If the funding currency surges, gains evaporate. JPY carry unwinds during risk-off events are violent.</p>
<div class="insight-card"><div class="insight-label">Pro Insight — AUD/JPY Risk Barometer</div><p>AUD/JPY pairs a high-yield risk currency with a safe haven. It tracks S&amp;P 500 closely — an <strong>early warning</strong> of sentiment shifts.</p></div>` },
        {
            title: "The COT Report", content: `
<p>Issued every Friday by the CFTC. Reflects futures positions as of the previous Tuesday.</p>
<h3>Trader Categories</h3><ol><li><strong>Commercial (Hedgers):</strong> Protecting against price changes.</li><li><strong>Non-Commercial (Large Speculators):</strong> Hedge funds and banks. <strong>Most important group</strong> — drives trends.</li><li><strong>Non-Reportable (Small Speculators):</strong> Retail. Often wrong at turning points.</li></ol>
<div class="formula-box"><div class="formula-label">Net Position</div>Net Non-Commercial = Long Contracts − Short Contracts</div>
<p>Extreme net positions often signal a reversal is near. Monitor "Open Interest" for new money confirmation.</p>` },
        {
            title: "Ad Hoc Events", content: `
<ul><li><strong>Natural disasters:</strong> Government spending (deficit) or repatriation flows.</li><li><strong>Pandemics:</strong> Massive risk-off initially. Then QE → recovery.</li><li><strong>Wars:</strong> Risk-off. Commodity exporters may benefit if conflict is in a competitor region.</li><li><strong>CB emergency actions:</strong> SNB EUR/CHF unpegging (2015) — CHF up 30% in minutes.</li><li><strong>Elections:</strong> Uncertainty before = volatility. Known policy after = trend establishment.</li></ul>
<div class="insight-card"><div class="insight-label">Pro Insight</div><p>Markets prefer <strong>stability and the status quo</strong>. A new leader brings uncertainty, increasing risk and safe-haven flows.</p></div>` }
    ],
    quiz: [
        { question: "In Risk-Off, which assets strengthen?", options: ["AUD, NZD, stocks", "JPY, CHF, Gold, Treasuries", "All commodities", "Everything falls equally"], correct: 1, explanation: "Safety assets: JPY, CHF, Gold, US Treasuries." },
        { question: "Main risk of a carry trade?", options: ["High interest payments", "Exchange rate volatility — funding currency can surge", "Illegal in most countries", "Transaction fees"], correct: 1, explanation: "If the funding currency strengthens rapidly, it wipes out months of carry gains." },
        { question: "Most important COT report group for forex?", options: ["Commercials", "Non-Commercial (Large Speculators)", "Small Speculators", "All equal"], correct: 1, explanation: "Large Speculators drive trends. Extreme positions signal potential reversals." },
        { question: "Why is AUD/JPY a 'risk barometer'?", options: ["Most traded pair", "Pairs high-yield risk currency with safe haven", "Same economy", "Lowest spread"], correct: 1, explanation: "AUD (risk) + JPY (safe haven) = mirrors global risk sentiment." }
    ]
});

// CH12
chapters.push({
    id: 12, title: "Putting It All Together", icon: "🎯",
    description: "Intermarket analysis, the 6-chart dashboard, supply/demand theory, indicator classification, and the complete FA checklist.",
    sections: [
        {
            title: "Intermarket Analysis", content: `
<div class="table-wrapper"><table><thead><tr><th>Relationship</th><th>Correlation</th><th>Rationale</th></tr></thead><tbody>
<tr><td>USD ↑ → Commodities ↓</td><td>Inverse</td><td>Commodities priced in USD become more expensive</td></tr>
<tr><td>Oil ↑ → CAD ↑</td><td>Positive</td><td>Canada is a major oil exporter</td></tr>
<tr><td>Gold ↑ → AUD ↑</td><td>Positive</td><td>Australia is a major gold producer</td></tr>
<tr><td>S&amp;P 500 ↑ → JPY ↓</td><td>Inverse</td><td>Risk-on reduces safe haven demand</td></tr>
<tr><td>Bond yields ↑ → USD ↑</td><td>Positive</td><td>Higher yields attract foreign capital</td></tr>
<tr><td>VIX ↑ → JPY ↑, Gold ↑</td><td>Positive</td><td>Fear gauge signals risk-off</td></tr>
</tbody></table></div>
<div class="insight-card"><div class="insight-label">Pro Insight</div><p>Correlations are tendencies, not laws. During extreme events (2008, COVID-2020), they can break. Strongest during clear trends, weakest during choppy markets.</p></div>` },
        {
            title: "The 6-Chart Dashboard", content: `
<ol><li><strong>EUR/USD:</strong> General dollar strength measure</li><li><strong>DXY:</strong> Dollar against all peers</li><li><strong>Gold:</strong> Risk sentiment and inflation</li><li><strong>S&amp;P 500:</strong> Risk-On/Off barometer</li><li><strong>Crude Oil:</strong> Industrial demand, influences CAD</li><li><strong>US Treasuries:</strong> Ultimate safe-haven; yields dictate rate expectations</li></ol>
<p>S&amp;P 500 rising + oil rising → Risk-On: buy commodity currencies. Gold rising + stocks crashing → Risk-Off: buy JPY, CHF, USD.</p>` },
        {
            title: "Supply, Demand &amp; Exchange Rates", content: `
<div class="table-wrapper"><table><thead><tr><th>Increases Demand (Appreciation)</th><th>Increases Supply (Depreciation)</th></tr></thead><tbody>
<tr><td>Higher interest rates</td><td>Lower interest rates</td></tr>
<tr><td>Strong economic growth</td><td>Weak growth</td></tr>
<tr><td>Trade surplus</td><td>Trade deficit</td></tr>
<tr><td>Risk-off (safe haven buying)</td><td>Risk-on (safe havens sold)</td></tr>
<tr><td>CB buying own currency</td><td>QE / money printing</td></tr>
</tbody></table></div>` },
        {
            title: "Classifying Indicators", content: `
<div class="table-wrapper"><table><thead><tr><th>Type</th><th>Definition</th><th>Examples</th></tr></thead><tbody>
<tr><td><strong>Leading</strong></td><td>Predicts future activity</td><td>PMI, Jobless Claims, Consumer Confidence, Yield Curve</td></tr>
<tr><td><strong>Coincident</strong></td><td>Moves with economy now</td><td>Industrial Production, Personal Income, Retail Sales</td></tr>
<tr><td><strong>Lagging</strong></td><td>Confirms past trends</td><td>Unemployment Rate, CPI, GDP (past quarters)</td></tr>
</tbody></table></div>
<div class="insight-card"><div class="insight-label">Pro Insight</div><p>Leading indicators tell YOU where the economy is going. Lagging indicators tell you when the FED will act. <strong>Trade the gap</strong> — use leading to position, wait for lagging to confirm the pivot.</p></div>` },
        {
            title: "The Complete FA Checklist", content: `
<ul>
<li>📊 <strong>Business cycle:</strong> What phase is each country in?</li>
<li>💰 <strong>Interest rate differential:</strong> Which CB is more hawkish? Widening or narrowing?</li>
<li>🔥 <strong>Inflation:</strong> CPI above or below target? Core inflation trend?</li>
<li>👷 <strong>Employment:</strong> Labour market tightening or loosening?</li>
<li>📈 <strong>GDP:</strong> Real GDP accelerating or decelerating?</li>
<li>⚖️ <strong>Trade balance:</strong> Surplus or deficit? Capital account offsetting?</li>
<li>🏦 <strong>Central bank tone:</strong> Hawkish or dovish? Language shifted?</li>
<li>🎭 <strong>Risk sentiment:</strong> Risk-on or risk-off environment?</li>
<li>🛢️ <strong>Commodity prices:</strong> Relevant for AUD, CAD, NZD?</li>
<li>🗳️ <strong>Political stability:</strong> Elections, crises, uncertainty?</li>
<li>📋 <strong>Expectations:</strong> What is priced in? Where are surprises likely?</li>
<li>🔗 <strong>Intermarket confirmation:</strong> Do equities, bonds, VIX, commodities confirm?</li>
</ul>
<div class="insight-card"><div class="insight-label">Final Insight</div><p>Technical analysis gives you <strong>signals</strong>. Fundamental analysis gives you a <strong>thesis</strong>. FA tells you WHAT and WHY. TA tells you WHEN and WHERE. The most powerful setups occur when both agree — <strong>FA provides the wind, TA points your sail.</strong></p></div>` }
    ],
    quiz: [
        { question: "S&P 500 making highs + oil rising. Dominant theme?", options: ["Risk-Off", "Risk-On — buy commodity currencies", "Stagflation", "No clear theme"], correct: 1, explanation: "Rising equities and oil = Risk-On. Buy commodity currencies, sell safe havens." },
        { question: "Leading vs. lagging indicators?", options: ["Leading are more accurate", "Leading predicts future; lagging confirms past", "Lagging move first", "No practical difference"], correct: 1, explanation: "Leading predicts (PMI, claims). Lagging confirms (unemployment, CPI)." },
        { question: "First thing to check before trading any pair?", options: ["Chart patterns", "Business cycle phase for each country", "Account balance", "Social media"], correct: 1, explanation: "Business cycle is the foundation of all FA analysis." },
        { question: "'FA provides the wind, TA points your sail' means:", options: ["FA and TA are separate", "FA tells WHAT/WHY; TA tells WHEN/WHERE", "TA is more important", "FA is only for long-term"], correct: 1, explanation: "FA gives direction (thesis); TA gives timing (signal). Best when combined." }
    ]
});

// ─── Badges ───
const BADGES = [
    { id: "ch1", name: "Mindset Master", icon: "🧠", description: "Completed Chapter 1 quiz", type: "chapter" },
    { id: "ch2", name: "Data Decoder", icon: "📊", description: "Completed Chapter 2 quiz", type: "chapter" },
    { id: "ch3", name: "Cycle Navigator", icon: "🔄", description: "Completed Chapter 3 quiz", type: "chapter" },
    { id: "ch4", name: "Inflation Expert", icon: "🔥", description: "Completed Chapter 4 quiz", type: "chapter" },
    { id: "ch5", name: "Employment Analyst", icon: "👷", description: "Completed Chapter 5 quiz", type: "chapter" },
    { id: "ch6", name: "GDP Guru", icon: "📈", description: "Completed Chapter 6 quiz", type: "chapter" },
    { id: "ch7", name: "Trade Flow Tracker", icon: "⚖️", description: "Completed Chapter 7 quiz", type: "chapter" },
    { id: "ch8", name: "Central Bank Decoder", icon: "🏦", description: "Completed Chapter 8 quiz", type: "chapter" },
    { id: "ch9", name: "Fiscal Policy Pro", icon: "🏛️", description: "Completed Chapter 9 quiz", type: "chapter" },
    { id: "ch10", name: "Currency Specialist", icon: "💱", description: "Completed Chapter 10 quiz", type: "chapter" },
    { id: "ch11", name: "Sentiment Specialist", icon: "🎭", description: "Completed Chapter 11 quiz", type: "chapter" },
    { id: "ch12", name: "FA Strategist", icon: "🎯", description: "Completed Chapter 12 quiz", type: "chapter" },
    { id: "perfect_score", name: "Perfect Score", icon: "💯", description: "Score 100% on any quiz", type: "special" },
    { id: "streak_7", name: "Weekly Warrior", icon: "🔥", description: "Maintain a 7-day streak", type: "special" },
    { id: "first_quiz", name: "First Steps", icon: "🌟", description: "Complete your first quiz", type: "special" },
    { id: "halfway", name: "Halfway Hero", icon: "⚡", description: "Complete 6 chapters", type: "special" },
    { id: "completionist", name: "Market Strategist", icon: "👑", description: "Complete all 12 chapters", type: "special" }
];

// ─── Levels ───
const LEVELS = [
    { level: 1, title: "Rookie Trader", minXP: 0, maxXP: 600 },
    { level: 2, title: "Market Apprentice", minXP: 600, maxXP: 1500 },
    { level: 3, title: "Macro Analyst", minXP: 1500, maxXP: 3000 },
    { level: 4, title: "Senior Analyst", minXP: 3000, maxXP: 5000 },
    { level: 5, title: "Market Strategist", minXP: 5000, maxXP: Infinity }
];

const XP_REWARDS = {
    CHAPTER_READ: 50,
    QUIZ_PER_CORRECT: 25,
    QUIZ_PERFECT: 100,
    DAILY_LOGIN: 10
};

// ─── Write file ───
function serializeContent(c) {
    return c.replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

let output = '// Auto-generated content data\n';
output += 'const CHAPTERS = ' + JSON.stringify(chapters, null, 2) + ';\n\n';
output += 'const BADGES = ' + JSON.stringify(BADGES, null, 2) + ';\n\n';
output += 'const LEVELS = ' + JSON.stringify(LEVELS, null, 2).replace(/\"Infinity\"/g, 'Infinity') + ';\n\n';
output += 'const XP_REWARDS = ' + JSON.stringify(XP_REWARDS, null, 2) + ';\n';

// Fix Infinity serialization
output = output.replace(/null(?=\s*\n\s*\})/g, 'Infinity');

fs.writeFileSync('js/content.js', output);
console.log('content.js generated! Size:', (output.length / 1024).toFixed(1), 'KB');

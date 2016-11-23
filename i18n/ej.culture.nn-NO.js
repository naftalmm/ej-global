ej.addCulture( "nn-NO", {
	name: "nn-NO",
	englishName: "Norwegian, Nynorsk (Norway)",
	nativeName: "norsk, nynorsk (Noreg)",
	language: "nn",
	numberFormat: {
		",": " ",
		".": ",",
		negativeInfinity: "-INF",
		positiveInfinity: "INF",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["$ -n","$ n"],
			",": " ",
			".": ",",
			symbol: "kr"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["søndag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"],
				namesAbbr: ["søn","mån","tys","ons","tor","fre","lau"],
				namesShort: ["sø","må","ty","on","to","fr","la"]
			},
			months: {
				names: ["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember",""],
				namesAbbr: ["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd.MM.yyyy",
				D: "d. MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "d. MMMM yyyy HH:mm",
				F: "d. MMMM yyyy HH:mm:ss",
				M: "d. MMMM"
			}
		}
	}
});
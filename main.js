// our self executing function!
(function () {

  // Step 1 process data

  // Add distinct colors to each participant, generated with 
  var colors = ["#56da74", "#ec04fc", "#fe4106", "#1990d6", "#eab696", "#f73b8d", "#d2c40f", "#14d6d7", "#8b73fe",
    "#edabeb", "#c5760e", "#6c9363", "#12e001", "#df6159", "#888894", "#d654ca", "#669702", "#c7c56f", "#c17188",
    "#82caee", "#8a7dd3", "#8dd50f", "#9fcaba", "#feb30f", "#0fdaaa", "#a88343", "#ff0bb6", "#39969b", "#c455f8",
    "#1e88fe", "#ff3761", "#169d5a", "#948b0c", "#e1b5c6", "#f3b65c", "#b3bdfd", "#94d085", "#049f1b", "#d65ea4",
    "#e4602b", "#a17caa", "#aa7f72", "#b1cc46", "#c77345", "#049b7e", "#fc433e", "#e05b7e", "#56db48", "#ec2edc",
    "#c3c499", "#b76dc2", "#7f913d", "#5390b3", "#b6c2d1", "#7ad2ab", "#898b72", "#ffabaa", "#b566e2", "#8ed360",
    "#7886be", "#55993c", "#c67169", "#fea7cb", "#dbc049", "#1ed3f1", "#fdb079", "#fda0fe", "#e0bc7c", "#ed43ab",
    "#cfbdb4", "#af8119", "#a77d8e", "#afce04", "#5688e1", "#76cfd4", "#61937f", "#787df0", "#8e8b55", "#bd6fa7",
    "#d4b6e4", "#68d690", "#aacd6a", "#099e3f", "#b57c5a", "#a4cba0", "#a173db", "#ec5267", "#3ed7bd", "#e8bc1f", "#6d8f90"];

  var stopwords = ["a", "about", "above", "above", "across", "after", "afterwards", "again", "against", "all",
    "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "amoungst", "amount",
    "an", "and", "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere", "are", "around", "as", "at",
    "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being",
    "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom", "but", "by", "call", "can", "cannot",
    "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during",
    "each", "eg", "eight", "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every",
    "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five",
    "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had",
    "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself",
    "him", "himself", "his", "how", "however", "hundred", "i", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it",
    "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile",
    "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely",
    "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now",
    "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our",
    "ours", "ourselves", "out", "over", "own", "part", "per", "perhaps", "please", "put", "rather", "re", "same", "see",
    "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six",
    "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such",
    "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter",
    "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though",
    "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve",
    "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what",
    "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon",
    "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with",
    "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves"];


  // give color
  // give distinct id
  // reduce redundant variables

  var remove_stop_words = function (stopwords, hobby_string) {
    // console.log();
    // console.log();
    // console.log();
    // console.log();
    // console.log(hobby_string);  
    hobby_string = hobby_string.toLowerCase();
    // console.log(hobby_string);  
    hobby_string = hobby_string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    // console.log(hobby_string);
    hobby_array = hobby_string.split(" ");
    // console.log(hobby_array);  
    hobby_array = hobby_array.sort();
    // console.log(hobby_array);
    result = [];
    // console.log("true? = " +(hobby_array.length > 0 && stopwords.length > 0))
    // console.log("stopwords = " + stopwords)

    var i = 0;
    while (hobby_array.length > 0 && stopwords.length > i) {
      if (hobby_array[0] < stopwords[i]) {
        // console.log("hobby_array[0] < stopwords[0]");
        result.push(hobby_array.shift());
        i++;
      }
      else if (hobby_array[0] > stopwords[i]) {
        // console.log("hobby_array[0] > stopwords[0]");
        i++;
      }
      else /* they're equal */ {
        // console.log("equal!");
        hobby_array.shift();
      }
    }
    for (var j = 0; j < result.length; j++) {
      if (result[j].length < 5) {
        result.splice(j, 1);
        j--;
      }
      else if(j<(result.length-1)){
        if(result[j]==result[j+1]){
          result.splice(j, 1);
          j--;
        }
      }
    }

    return result;
  }

  var hobby_list_table = {}

  for (let i = 0; i < data.length; i++) {
    data[i].id = i+1;
    data[i].color = colors[i];
    data[i]["programming"] = Math.round((data[i]["programming"] + 0.5 * data[i]["HCI prog."] + 0.5 * data[i]["code repository"]) / 2);
    data[i]["collaboration"] = Math.round((data[i]["collaboration"] + data[i]["communication"]) / 2);
    hobby_list_table[i+1] = remove_stop_words(stopwords, data[i]["interest, hobbies"]);
  }


  // Generate stats for the perfect group as barchart

  var bardata = [
    {
      "Subject": "InfoVis",
      "Class Average": 1,
      "Current Group Average": 0
    },
    {
      "Subject": "mathematics",
      "Class Average": 2,
      "Current Group Average": 0
    },
    {
      "Subject": "statistical",
      "Class Average": 2,
      "Current Group Average": 0
    },
    {
      "Subject": "artistry",
      "Class Average": 6,
      "Current Group Average": 0
    },
    {
      "Subject": "computer usage",
      "Class Average": 6,
      "Current Group Average": 0
    },
    {
      "Subject": "programming",
      "Class Average": 1,
      "Current Group Average": 0
    },
    // {
    //   "Subject": "GFX prog.",
    //   "Class Average": 1,
    //   "Current Group Average": 0
    // },
    {
      "Subject": "UX eval.",
      "Class Average": 3,
      "Current Group Average": 0
    },
    {
      "Subject": "collaboration",
      "Class Average": 23,
      "Current Group Average": 0
    },
  ]

  for (var i = 0; i < bardata.length; i++) {
    let sum = 0;
    for (var j = 0; j < data.length; j++) {
      if (i == 8) {
      }
      sum += data[j][bardata[i].Subject];
    }
    bardata[i]["Class Average"] = sum / data.length;
  }

  var make_bar_graph = function (bardata) {
    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    var x0 = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

    var x1 = d3.scale.ordinal();

    var y = d3.scale.linear()
      .range([height, 0]);

    var color = d3.scale.ordinal()
      .range(["#C4F0FF", "#E8D1FF"]);

    var xAxis = d3.svg.axis()
      .scale(x0)
      .orient("bottom");

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickFormat(d3.format(".2s"));

    d3.select("#barsvg").remove();

    var svg = d3.select("#barchart").append("svg").attr("id", "barsvg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var ageNames = d3.keys(bardata[0]).filter(function (key) { return key !== "Subject"; });

    bardata.forEach(function (d) {
      d.ages = ageNames.map(function (name) { return { name: name, value: +d[name] }; });
    });

    x0.domain(bardata.map(function (d) { return d.Subject; }));
    x1.domain(ageNames).rangeRoundBands([0, x0.rangeBand()]);
    y.domain([0, d3.max(bardata, function (d) { return d3.max(d.ages, function (d) { return d.value; }); })]);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text")
      .attr("dx", "-.10em");

    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");

    var state = svg.selectAll(".Subject")
      .data(bardata)
      .enter().append("g")
      .attr("class", "Subject")
      .attr("transform", function (d) { return "translate(" + x0(d.Subject) + ",0)"; });

    state.selectAll("rect")
      .data(function (d) { return d.ages; })
      .enter().append("rect")
      .attr("width", x1.rangeBand())
      .attr("x", function (d) { return x1(d.name); })
      .attr("y", function (d) { return y(d.value); })
      .attr("height", function (d) { return height - y(d.value); })
      .style("fill", function (d) { return color(d.name); });
    d3.select(".legend").remove();
    var legend = svg.selectAll(".legend")
      .data(ageNames.slice().reverse())
      .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

    legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function (d) { return d; });
  };


  make_bar_graph(bardata);




  // HERE WE ARE DONE WITH THE BAR CHART



  var pc = d3.parcoords()("#example");

  var range = pc.height() - pc.margin().top - pc.margin().bottom;

  var scale = d3.scale.linear().domain([1, 10]).range([range, 1]);

  var dimensions = {
    "InfoVis": {
      type: "number",
      yscale: scale,
    },
    "mathematics": {
      type: "number",
      yscale: scale,
    },
    "statistical": {
      type: "number",
      yscale: scale,
    },
    "artistry": {
      type: "number",
      yscale: scale,
    },
    "computer usage": {
      type: "number",
      yscale: scale,
    },
    "programming": {
      type: "number",
      yscale: scale,
    },
    // "GFX prog.": {
    //   type: "number",
    //   yscale: scale,
    // },
    "HCI prog.": {
      type: "number",
      yscale: scale,
    },
    "UX eval.": {
      type: "number",
      yscale: scale,
    },
    "communication": {
      type: "number",
      yscale: scale,
    },
    "collaboration": {
      type: "number",
      yscale: scale,
    },
    "code repository": {
      type: "number",
      yscale: scale,
    }
  };

  pc.dimensions(dimensions)
    .data(data)
    .color(function (d) {
      return d.color;
    })
    .hideAxis(["interests"])
    .hideAxis(["Alias", "color", "Degree", "Major", "interest, hobbies", "expecting", "id", "communication", "HCI prog.", "code repository"])
    .composite("darken")
    .alpha(0.35)
    .render()
    .brushMode("1D-axes")
    .interactive();  // command line mode

  var filtered_people = [];

  $("#target").click(function () {
    filtered_people.length = 0;
    container = $("#peoples").empty();
    ls = pc.brushed();
    for (i = 0; (i < ls.length) && (i < 7); i++) {
      filtered_people.push(ls[i]);
      let id = ls[i].id;
      container.append("<tr id='" + id + "'><td><span class='box' style='background-color:" + ls[i].color + ";'></span></td><td>" + ls[i].Alias + "</td><td>" + ls[i].Major + "</td>")
      $("#" + id).click(function (event) {
        let id = event.currentTarget.id.toString();
        selected_person = get_person(id)
        select_person(selected_person);
      });
    }
  });

  var get_person = function (id) {
    let selected_person = {};
    for (i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        selected_person = data[i];
      }
    }
    return selected_person;
  }

  var select_person = function (person) {
    $("#personal_info").show();
    container = $("#person_first").empty();
    container.append("<tr><td><span class='box' style='background-color:" + person.color + ";'></span></td><td>" + person.Alias + "</td><td>" + person.Major + "</td>")
    container = $("#person_second").empty();
    container.append("<h5>Hobbies and interests</h5>");
    container.append("<p>" + person["interest, hobbies"] + "</p>");
    container = $("#person_third").empty();
    container.append("<h5>Expectations</h5>");
    container.append("<p>" + person.expecting + "</p>");
    container.append("<div id='secretId'>" + -person.id + "</div>");
    pc.highlight([person]);
  };

  var group_members = []

  var remove_person_from_group = function (id) {
    person = get_person(id);
    // remove from actual table
    for (var i = 0; i < group_members.length; i++) {
      if (person.id == group_members[i].id) {
        group_members.splice(i, 1);
      }
    }
    // remove from table
    $("#" + (person.id) * 100).remove();
    // recalculate bar graph
    recalculate_bar_graph();
  }

  var recalculate_bar_graph = function () {
    for (let i = 0; i < bardata.length; i++) {
      let subject = bardata[i].Subject;
      bardata[i]["Current Group Average"] = 0;
      for (j = 0; j < group_members.length; j++) {
        bardata[i]["Current Group Average"] += group_members[j][subject] / group_members.length;
      }
    }
    make_bar_graph(bardata);
    var legends = $(".legend")[0].remove();
  }

  $("#addbutton").click(function () {
    //d3.select("#barchart>svg").remove();
    let person = get_person(-1 * $("#secretId").html());
    console.log(person);
    var not_in_group = true;
    for (var i = 0; i < group_members.length; i++) {
      if (person.id == group_members[i].id) {
        not_in_group = false;
      }
    }
    if (not_in_group) {
      group_members.push(person);
      // update idealgroup
      recalculate_bar_graph();

      let id = person.id;
      container = $("#group_table_body");
      container.append("<tr id='" + (id * 100) + "'><td><span class='box' style='background-color:" + person.color + ";'></span></td><td>" + person.Alias + "</td><td>" + person.Major + "</td>")
      $("#" + (id * 100)).click(function (event) {
        let id = +(event.currentTarget.id.toString()) / 100;
        remove_person_from_group(id);
      });
    }
    make_cloud();
  });


  $("#clear_filter").click(function () {
    pc.brushReset();
    pc.unhighlight();
  });

  $("#clear_highlights").click(function () {
    pc.unhighlight();
  });

  var words = [];

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  var get_words = function () {
    word_size = words.length;
    words = [];
    for (var i = 0; i < group_members.length; ++i) {
      var person = group_members[i];
      var id = +person.id;
      var hobby_list = hobby_list_table[id];
      for (var j = 0; j < hobby_list.length; j++) {
        var already_in = false;
        for (var k = 0; k < words.length; k++) {
          if (words[k]["text"] == hobby_list[j]) {
            words[k]["size"] += getRandomArbitrary(5, 10);
            already_in = true;
          }
        }
        if (!already_in) {
          let word_element = {
            "text": hobby_list[j],
            "size": getRandomArbitrary(5, 10)
          }
          words.push(word_element);
        }
      }
    }
    console.log(words);
    return words;
  }

  var frequency_list = [];

  var make_cloud = function () {


    //var frequency_list = [{"text":"study","size":400},{"text":"motion","size":150},{"text":"forces","size":100},{"text":"car","size":50},{"text":"add","size":50},{"text":"traveled","size":50},{"text":"weight","size":50},{"text":"electrical","size":50},{"text":"power","size":50}];
    frequency_list = get_words();

    if ($("#cloud").length == 0) {
      let color = d3.scale.linear()
        .domain([0, 1, 2, 3, 4, 5, 6, 10, 15, 20, 20])        
        .range(["#F8EAFB","#F7E3F8","#F6DCF5","#F5D5F2","#F5CEEF","#F4C7EC","#F3C0E9","#F2B9E6","#F1B2E3","#F1ACE1","#F9F1FE","#F6E9FC","#F4E2FB","#F4DBFA","#F3D4F8","#F4CDF7","#F5C6F6","#F4C0F2","#F3B9ED","#F2B2E7","#F0ABE0"]);

      console.log(frequency_list);
      layout = d3.layout.cloud().size([1800, 700])
        .words(frequency_list)
        .rotate(0)
        .fontSize(function (d) { return Math.pow(d.size, 1.8); })
        .padding(10)
        .on("end", draw)
        .start();
      function draw(words) {
        d3.select("#wordcloud").append("svg")
          .attr("id", "cloud")
          .attr("width", 1800)
          .attr("height", 700)
          .attr("class", "wordcloud")
          .append("g")
          // without the transform, words words would get cutoff to the left and top, they would
          // appear outside of the SVG area
          .attr("transform", "translate(700,400)")
          .selectAll("text")
          .data(words)
          .enter().append("text")
          .style("font-size", function (d) { return d.size + "px"; })
          .style("fill", function (d, i) { return color(i); })
          .attr("transform", function (d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function (d) { return d.text; });
      }
    }
    else {
      d3.select("#cloud").remove();
      console.log(frequency_list);
      layout.words(frequency_list).start();
    }
    $("#cloud").css({top:-100, left: 0, position:'absolute'});
  };



})();
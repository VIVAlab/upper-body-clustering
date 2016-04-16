def generate_html(cluster_file, output_file):

    # Get data from json
    clusters = open(cluster_file).read()

    # Put the json content into the html file
    html = open('./resources/visualizer.html').read()
    html = html.replace('{{TEMPLATE}}', clusters)

    # Write the file
    visualizer = open(output_file, 'w+')
    visualizer.write(html)
    visualizer.close()

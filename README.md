# LocalTimeAndGlobalTime
#This simple web application displays both the global UTC time in a 12-hour format and the local time in a 24-hour format. It allows you to start and stop the global time display using the "Start Global Time" button, and the local time is displayed as soon as you click the "Start Local Timer" button. The local time continuously updates every second.
##Features
#Global Time: Click the "Start Global Time" button to display the current UTC time in a 12-hour format (with AM/PM). The time updates every second.
#Local Time: Click the "Start Local Timer" button to display the current local time in a 24-hour format. The local time updates every second as well.
##How to Use
#Open the index.html file in a web browser.
#Click the Start Global Time button to initiate the display of UTC time.
#Click the Start Local Timer button to display and continuously update the local time.
#To stop the global time updates, you can simply refresh the page.
##Code Structure
#The functionality for global time is in the updateGlobalTime function.
#The functionality for local time is in the updateLocalTime function.
#Both global and local times are updated every second using setInterval.

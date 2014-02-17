function debug(msg)
{
	//console.log("JIRA Plugin: " + msg)
}

var BILLINGKEY_ID = "tempo-expenditure-item",
	FILENAME = "CreateIssue.jspa",
	PROJECTNAME_ID = "issue-create-project-name";

var PROJECTS = {
	"TAB" : "TAB IPTV",
	"FREEVIEW" : "Freeview"
};

JIRA_PLUGIN = (function(){
	start = function()
	{
		debug("start plugin");
		var projectName = "",
			projectNameEL = document.getElementById(PROJECTNAME_ID),
			billingKeyEL = document.getElementById(BILLINGKEY_ID);

		if (projectNameEL === null)
		{
			// return;
		}
		else
		{
			projectName = projectNameEL.textContent;
			debug(projectName);
		}

		if (billingKeyEL === null)
		{
			return;
		}

		if (location.pathname.indexOf(FILENAME) >= 0)
		{
			switch(projectName)
			{
				case PROJECTS.TAB:
					debug("PROJECTS.TAB=" + PROJECTS.TAB);
					billingKeyEL.selectedIndex = 2;
					break;
				case PROJECTS.FREEVIEW:
					debug("PROJECTS.FREEVIEW=" + PROJECTS.FREEVIEW);
					billingKeyEL.selectedIndex = 2;
					break;
			}
		}
	};

	return {
		init: function(){
			start();
		}
	};
})();

document.addEventListener( "DOMContentLoaded", JIRA_PLUGIN.init, false );
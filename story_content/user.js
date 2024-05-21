function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5p3gMFM7rcU":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var webHTML = player.GetVar('HTML');
var webCSS = player.GetVar('CSS');
var webJavaScript = player.GetVar('JavaScript');
var webOutput = document.querySelector("[data-acc-text='Output']");

function updateOutput() {
  var htmlCode = '<!DOCTYPE html><html><head><style>' + webCSS + '</style></head><body>' + webHTML + '</body></html>';
  var jsCode = webJavaScript;

  var iframe = document.createElement('iframe');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.pointerEvents = 'auto';

  iframe.srcdoc = htmlCode;

  webOutput.innerHTML = '';
  webOutput.appendChild(iframe);

  var iframeWindow = iframe.contentWindow;
  iframeWindow.eval(jsCode);
}

player.SetVar('HTML', webHTML);
player.SetVar('CSS', webCSS);
player.SetVar('JavaScript', webJavaScript);

updateOutput();

}

};

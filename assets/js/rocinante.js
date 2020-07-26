(function(document) {
  document.addEventListener('click', function(e) {
    const target = e.target;
    const emailHooks = document.getElementsByClassName('email-hook');
    const emailText = document.querySelector(`#email-text-${target.id}`);
    if(emailHooks.namedItem(target.id)) {
      if (emailText) {
        if (emailText.innerHTML == emailId)
          emailText.innerHTML = '';
        else {
          emailText.innerHTML = emailId;
          emailText.href = 'mailto:'+emailId
        }
      } else {
        target.innerHTML = emailId;
        target.href = 'mailto:'+emailId
        target.className = ''
      }
      e.preventDefault();
    }
  }, false);
})(document);

// Convert mermaid in code block to Hugo shortcode.
jQuery(document).ready(function () {
  $("code.language-mermaid").each(function (index, element) {
    var content = $(element).html().replace(/&amp;/g, "&");
    $(element)
      .parent()
      .replaceWith('<div class="mermaid" align="center">' + content + "</div>");
  });
});
